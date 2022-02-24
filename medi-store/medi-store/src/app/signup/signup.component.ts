import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolService } from '../login/pool.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  newUser:any={};
 
  constructor(private poolservice:PoolService,
    private router:Router)
   {
    this.newUser.userName=''
    this.newUser.email=''
    this.newUser.password=''
    this.newUser.phone=''
    this.newUser.adress=''

  }
  registerUser(){
    console.log(this.newUser);
    this.poolservice.insertUser(this.newUser)
    alert(this.newUser.userName+" you registred succesfully ")
    this.router.navigate(['/login'])
  }


  ngOnInit(): void
  {
  }


}

