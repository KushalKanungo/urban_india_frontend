import { Component, Input, OnInit } from '@angular/core';
import { BusinessServiceModal } from '../_models/business_service';

@Component({
  selector: 'app-business-service-card',
  templateUrl: './business-service-card.component.html',
  styleUrls: ['./business-service-card.component.scss'],
})
export class BusinessServiceCardComponent implements  OnInit{
  ngOnInit(): void {
    if(this.businessServiceData.image != null){
      this.businessServiceData.image = 'http://localhost:8080/image/'+this.businessServiceData.image;
    }

  }
  @Input() businessServiceData!: BusinessServiceModal;

}
