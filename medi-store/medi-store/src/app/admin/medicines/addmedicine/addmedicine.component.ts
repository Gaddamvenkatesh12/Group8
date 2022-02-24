import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Medicine } from '../../../model/Medicine';
import { HttpClientService } from '../../../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.css']
})
export class AddmedicineComponent implements OnInit {

  @Input()
  medicine: Medicine;

  @Output()
  medicineAddedEvent = new EventEmitter();
  private selectedFile;
  imgURL: any;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveMedicine() {
    if (this.medicine.id == null) {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8905/api/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.httpClientService.addMedicine(this.medicine).subscribe(
            (medicine) => {
              this.medicineAddedEvent.emit();
              this.router.navigate(['admin', 'medicines']);
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
    }else {
      this.httpClientService.updateMedicine(this.medicine).subscribe(
        (medicine) => {
          this.medicineAddedEvent.emit();
          this.router.navigate(['admin', 'medicines']);
        }
      );
    }
  }
}