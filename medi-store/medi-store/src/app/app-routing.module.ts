import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicinesComponent } from './admin/medicines/medicines.component';
import { ShopmedicineComponent } from './shopmedicine/shopmedicine.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CartComponent } from './cart/cart.component';
import { MedistoreComponent } from './medistore/medistore.component';



const routes: Routes = [
  { path: 'admin/medicines', component: MedicinesComponent },
  { path: 'shop', component: ShopmedicineComponent },
  { path: 'menu', component : MenuComponent},
  { path:'about',component:AboutusComponent},
  { path:'contact',component:ContactusComponent},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path: 'cart',component:CartComponent},
  { path: '',component:MedistoreComponent}
];
  
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
