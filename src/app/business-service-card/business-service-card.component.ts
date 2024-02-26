import { Component, Input, OnInit } from '@angular/core';
import { BusinessServiceModal } from '../_models/business_service';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-business-service-card',
  templateUrl: './business-service-card.component.html',
  styleUrls: ['./business-service-card.component.scss'],
})
export class BusinessServiceCardComponent implements  OnInit{

  constructor ( private readonly router: Router, private cartService: CartService ) { }
  ngOnInit(): void {
    if(this.businessServiceData.image != null){
      this.businessServiceData.image = `${environment.baseUrl}/image/`+this.businessServiceData.image;
    }

  }
  @Input() businessServiceData!: BusinessServiceModal;

  openServicePage( event: any, id: number){
    this.router.navigate(['services', id])
  }

  addItemToCart(){
    this.cartService.addServiceToCart(this.businessServiceData)
  }

}
