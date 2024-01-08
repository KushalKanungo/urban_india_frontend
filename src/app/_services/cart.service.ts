import { Injectable, inject } from '@angular/core';
import { BusinessService } from './business.service';
import { BusinessServiceModal } from '../_models/business_service';
import { BehaviorSubject, Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartItems: BusinessServiceModal[] = []
  baseUrl = `${environment.baseUrl}/api/cart`

  constructor(
    private toasterService:MessageService,
    private http: HttpClient
  ){

  }

  public getCartPrice(){
    return this.cartItems.reduce(( acc, {price} )=> { return acc+=price  }, 0)
  }

  public addServiceToCart(service: BusinessServiceModal) {
    this.postServiceToCart(service).subscribe({
      next: ()=>{
        if (this.isServiceValidToAdd(this.cartItems, service))
          this.cartItems.push(service)
          this.toasterService.add({
            severity: 'info',
            detail: 'Item added to cart.',
            closable: true
          })
      }
    })
  }

  public addServicesToCart(services: BusinessServiceModal[]) {
    this.cartItems.concat(services)
  }

  public removeServiceToCart(businessServiceId: number) {
    this.removeServiceFromCart(businessServiceId).subscribe({
      next: ()=>{
        this.cartItems = this.cartItems.filter( ({id}) => id !== businessServiceId)
      }
    })
  }

  private isServiceValidToAdd(cartItems: BusinessServiceModal[], newItem: BusinessServiceModal){
    return cartItems.every((item) => item.id !== newItem.id)
  }

  private postServiceToCart(service: BusinessServiceModal) {
    return this.http.post(`${this.baseUrl}`, { businessServiceId: service.id })
  }

  private removeServiceFromCart(cartItemId: number){
    return this.http.delete(`${this.baseUrl}/${cartItemId}`)
  }

  private postServicesToCart(services: BusinessServiceModal[]) {
    // TODO: API Call to add service to cart
  }
}
