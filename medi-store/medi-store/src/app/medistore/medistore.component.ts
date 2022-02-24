import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medistore',
  templateUrl: './medistore.component.html',
  styleUrls: ['./medistore.component.css']
})
export class MedistoreComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClickHandler(){
    this.router.navigate(['/login'],{relativeTo:this.route});
  }
}
