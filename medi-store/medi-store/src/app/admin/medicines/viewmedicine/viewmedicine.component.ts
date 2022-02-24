import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { Medicine } from 'src/app/model/Medicine';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewmedicine',
  templateUrl: './viewmedicine.component.html',
  styleUrls: ['./viewmedicine.component.css']
})
export class ViewmedicineComponent implements OnInit {

  @Input()
  medicine: Medicine;

  @Output()
  medicineDeletedEvent = new EventEmitter();


  constructor(private httpClientService: HttpClientService, private router: Router
    ) { }

  ngOnInit() {
  }

  deleteMedicine() {
    this.httpClientService.deleteMedicine(this.medicine.id).subscribe(
      (medicine) => {
        this.medicineDeletedEvent.emit();
        this.router.navigate(['admin', 'medicines']);
      }
    );
  }

  editMedicine() {
    this.router.navigate(['admin', 'medicines'], { queryParams: { action: 'edit', id: this.medicine.id } });
  }

}
