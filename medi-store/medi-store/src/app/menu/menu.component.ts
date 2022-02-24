import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { Medicine } from '../model/Medicine';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cartMedicines: any[];

  constructor() { }

  ngOnInit(): void {
  }
  emptyCart() {
    this.cartMedicines = [];
    localStorage.clear();
  }


}
