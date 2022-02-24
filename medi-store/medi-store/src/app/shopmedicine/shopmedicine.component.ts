import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { Medicine } from '../model/Medicine';

@Component({
  selector: 'app-shopmedicine',
  templateUrl: './shopmedicine.component.html',
  styleUrls: ['./shopmedicine.component.css']
})
export class ShopmedicineComponent implements OnInit {

  medicines: Array<Medicine>;
  medicinesRecieved: Array<Medicine>;
  cartMedicines: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }


  ngOnInit() {
    this.httpClientService.getMedicines().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartMedicines = JSON.parse(data);
    } else {
      this.cartMedicines = [];
    }
  }

  handleSuccessfulResponse(response) {
    this.medicines = new Array<Medicine>();
    this.medicinesRecieved = response;
    for (const medicine of this.medicinesRecieved) {

      const medicinewithRetrievedImageField = new Medicine();
      medicinewithRetrievedImageField.id = medicine.id;
      medicinewithRetrievedImageField.name = medicine.name;
      medicinewithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + medicine.picByte;
      medicinewithRetrievedImageField.company = medicine.company;
      medicinewithRetrievedImageField.price = medicine.price;
      medicinewithRetrievedImageField.picByte = medicine.picByte;
      this.medicines.push(medicinewithRetrievedImageField);
    }
  }

  addToCart(medicineId) {
    let medicine = this.medicines.find(medicine => {
      return medicine.id === +medicineId;
    });
    let cartData = [];
    let data = localStorage.getItem('cart');
    console.log(data);
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    console.log('hii');
   cartData.push(medicine);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    medicine.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartMedicines = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartMedicines = [];
    localStorage.clear();
  }

}
