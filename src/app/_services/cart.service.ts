import { Injectable, inject } from '@angular/core';
import { BusinessService } from './business.service';
import { BusinessServiceModal } from '../_models/business_service';
import { BehaviorSubject, Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';


export type CartItemModel = {
  id: number,
  businessService: BusinessServiceModal
}
@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartItems: CartItemModel[] = []
  cartPrice: number = 0
  baseUrl = `${environment.baseUrl}/api/cart`

  constructor(
    private toasterService:MessageService,
    private http: HttpClient
  ){

  }

  public getCartPrice(cartItems: CartItemModel[]){
    debugger
    this.cartPrice = cartItems.reduce(( acc, {businessService: { price}} )=> { return acc+=price  }, 0)
  }

  public getCartServices() {
    return this.http.get(this.baseUrl)
  }
  
  public addServiceToCart(service: BusinessServiceModal) {
    this.postServiceToCart(service).subscribe({
      next: (response: any)=>{
          this.cartItems.push(response.dto)
          this.toasterService.add({
            severity: 'info',
            detail: 'Item added to cart.',
            closable: true
          })
      }
    })
  }

  public addServicesToCart(services: CartItemModel[]) {
    this.cartItems.concat(services)
  }

  public removeServiceToCart(businessServiceId: number) {
    let cartItemId = this.cartItems.find(({businessService: { id }}) => id === businessServiceId )?.id
    this.removeServiceFromCart(cartItemId).subscribe({
      next: ()=>{
        this.cartItems = this.cartItems.filter( ({id}) => id !== cartItemId)
        this.toasterService.add({
          severity: 'info',
          detail: 'Item removed from cart.',
          closable: true
        })
      }
    })
  }

  private isServiceValidToAdd(cartItems: CartItemModel[], newItem: CartItemModel){
    return cartItems.every((item) => item.id !== newItem.id)
  }

  private postServiceToCart(service: BusinessServiceModal) {
    return this.http.post(`${this.baseUrl}`, { businessServiceId: service.id })
  }

  private removeServiceFromCart(cartItemId: number | undefined){
    return this.http.delete(`${this.baseUrl}/${cartItemId}`)
  }

  private postServicesToCart(services: BusinessServiceModal[]) {
    // TODO: API Call to add service to cart
  }
}
