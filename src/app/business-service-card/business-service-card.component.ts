import { Component, Input, OnInit } from '@angular/core';
import { BusinessServiceModal } from '../_models/business_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-service-card',
  templateUrl: './business-service-card.component.html',
  styleUrls: ['./business-service-card.component.scss'],
})
export class BusinessServiceCardComponent implements  OnInit{

  constructor ( private readonly router: Router ) { }
  ngOnInit(): void {
    if(this.businessServiceData.image != null){
      this.businessServiceData.image = 'http://localhost:8080/image/'+this.businessServiceData.image;
    }

  }
  @Input() businessServiceData!: BusinessServiceModal;

  openServicePage( event: any, id: number){
    this.router.navigate(['service', id])
  }

}
