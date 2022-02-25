import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/model/Medicine';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  medicines: Array<Medicine>;
  medicinesRecieved: Array<Medicine>;
  action: string;
  selectedMedicine : any;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.refreshData();
   }

   refreshData()
   {
    this.httpClientService.getMedicines().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
	const id = params['id'];
        if (id) {
          this.selectedMedicine = this.medicines.find(medicine => {
            return medicine.id === +id;
          });
        }
      }
    );
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
      medicinewithRetrievedImageField.picByte=medicine.picByte;
      this.medicines.push(medicinewithRetrievedImageField);
    }
  }

   addMedicine() {
    this.selectedMedicine = new Medicine();
    this.router.navigate(['admin', 'medicines'], { queryParams: { action: 'add' } });
  }

  viewMedicine(id: number) {
    this.router.navigate(['admin', 'medicines'], { queryParams: { id, action: 'view' } });
  }

}
