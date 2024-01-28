import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BusinessServiceModal } from '../_models/business_service';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { CartService } from '../_services/cart.service';

export interface SmallCardConfig {
  showRatings?: boolean,
  showPrice?: boolean
  showDeleteIcon?: boolean
}

@Component({
  selector: 'app-business-service-card-small',
  templateUrl: './business-service-card-small.component.html',
  styleUrls: ['./business-service-card-small.component.scss']
})
export class BusinessServiceCardSmallComponent {

  @Input() businessServiceData!: BusinessServiceModal;
  @Input() showDeleteIcon!: boolean
  @Input() cardConfig!: SmallCardConfig;

  baseUrl = environment.baseUrl

  constructor(private router: Router, private cartService: CartService) {}
  goToServicePage(){
    this.router.navigate(['service', this.businessServiceData.id])
  }

  removeItem(id: number){
    this.cartService.removeServiceToCart(id)
  }

}
