import { Injectable } from '@angular/core';
import { BusinessService } from './business.service';
import { BusinessServiceModal } from '../_models/business_service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartItems: BusinessServiceModal[] = []

  public getCartPrice(){
    return this.cartItems.reduce(( acc, {price} )=> { return acc+=price  }, 0)
  }

  public addServiceToCart(service: BusinessServiceModal) {
    if (this.isServiceValidToAdd(this.cartItems, service))
      this.cartItems.push(service)
    // TODO: Add toaster message than item cannot be added twice
  }
  
  public addServicesToCart(services: BusinessServiceModal[]) {
    this.cartItems.concat(services)
  }


  private isServiceValidToAdd(cartItems: BusinessServiceModal[], newItem: BusinessServiceModal){
    return true || cartItems.every((item) => item.id !== newItem.id) 
  }


  constructor() { }
}
