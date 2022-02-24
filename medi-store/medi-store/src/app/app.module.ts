import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import { MedicinesComponent } from './admin/medicines/medicines.component';
import { AddmedicineComponent } from './admin/medicines/addmedicine/addmedicine.component';
import { ViewmedicineComponent } from './admin/medicines/viewmedicine/viewmedicine.component';
import { ShopmedicineComponent } from './shopmedicine/shopmedicine.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserService } from './login/User.Service';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './admin/users/users.component';
import { UserComponent } from './user/user.component';
import { MedistoreComponent } from './medistore/medistore.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MedicinesComponent,
    AddmedicineComponent,
    ViewmedicineComponent,
    ShopmedicineComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    ContactusComponent,
    CartComponent,
    UsersComponent,
    UserComponent,
    MedistoreComponent
  
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
