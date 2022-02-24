import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { authenticationStatus } from './authenticationStatus.model';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}
  authenticate(
    userName: String,
    password: string
  ): Observable<authenticationStatus> {
    console.log(userName, password);
    let body = {
      userName: userName,
      password: password,
    };
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    });
    return this.httpClient.post<authenticationStatus>(
      'http://localhost:8905/api/userlogin',
      body,
      {
        headers: headers,
      }
    );
  }
  authenticateAdmin(
    userName: String,
    password: string
  ): Observable<authenticationStatus> {
    console.log(userName, password);
    let body = {
      name: userName,
      password: password,
    };
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    });
    return this.httpClient.post<authenticationStatus>(
      'http://localhost:8905/api/adminlogin',
      body,
      {
        headers: headers,
      }
    );
  }
}
