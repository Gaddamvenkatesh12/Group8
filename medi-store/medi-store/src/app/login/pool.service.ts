import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoolService {
  baseUrl:string="http://localhost:8905/api/"
  userName:string = "";
  password:string = "";
  constructor(private http:HttpClient) { }
  insertUser(newUser:any)
  {
    this.http.post(this.baseUrl + 'user', newUser).subscribe();
  }
  
}
