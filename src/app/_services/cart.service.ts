import { Injectable, inject } from '@angular/core';
import { BusinessService } from './business.service';
import { BusinessServiceModal } from '../_models/business_service';
import { BehaviorSubject, Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartItems: BusinessServiceModal[] = []
  toasterService:MessageService = inject(MessageService)

  public getCartPrice(){
    return this.cartItems.reduce(( acc, {price} )=> { return acc+=price  }, 0)
  }

  public addServiceToCart(service: BusinessServiceModal) {
    if (this.isServiceValidToAdd(this.cartItems, service))
      this.cartItems.push(service)
    else
    this.toasterService.add({severity: 'info', detail: `${service.title} already present in cart.` })
  }

  public addServicesToCart(services: BusinessServiceModal[]) {
    this.cartItems.concat(services)
  }

  public removeServiceToCart(businessServiceId: number) {
    this.cartItems = this.cartItems.filter( ({id}) => id !== businessServiceId)
  }

  private isServiceValidToAdd(cartItems: BusinessServiceModal[], newItem: BusinessServiceModal){
    return cartItems.every((item) => item.id !== newItem.id)
  }

  private postServiceToCart(service: BusinessServiceModal) {
    // TODO: API Call to add service to cart
  }


  private postServicesToCart(services: BusinessServiceModal[]) {
    // TODO: API Call to add service to cart
  }


  constructor() { }
}
