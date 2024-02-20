import { Injectable, inject } from '@angular/core';
import { BusinessService } from './business.service';
import { BusinessServiceModal } from '../_models/business_service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { CouponService } from './coupon.service';
import { Coupon } from '../_models/coupon';
import { DeviceDetectorService } from './device-detector.service';
import { Address } from '../_models/address';
import { AddressService } from './address.service';


export type CartItemModel = {
  id: number,
  businessService: BusinessServiceModal
  completionDate?: Date 
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItemModel[] = []
  coupons: Coupon[] = []
  selectedCoupon: Coupon | undefined  
  cartPrice: number = 0
  cartBusinessId!: number
  baseUrl = `${environment.baseUrl}/api/cart`
  addresses!: Address[]

  constructor(
    private toasterService:MessageService,
    private couponService: CouponService,
    private addressSerive: AddressService,
    private http: HttpClient,
  ){
  }

  public getCartPrice(cartItems: CartItemModel[]){
    this.cartPrice = cartItems.reduce(( acc, {businessService: { price}} )=> { return acc+=price  }, 0)
  }

  public getCartServices() {
    return this.http.get(this.baseUrl)
  }
  
  public addServiceToCart(service: BusinessServiceModal) {
    this.postServiceToCart(service).subscribe({
      next: (response: any)=>{
          this.cartItems.push(response.dto)
          this.cartBusinessId = service.businessId
          this.fetchCoupons()
          this.getCartPrice(this.cartItems)
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
        this.getCartPrice(this.cartItems)
        this.fetchCoupons()
        this.toasterService.add({
          severity: 'info',
          detail: 'Item removed from cart.',
          closable: true
        })
      }
    })
  }

  public fetchAddress(){
    this.addressSerive.getAllAddress().subscribe({next: (res: any)=>{
        this.addresses = res.dto
    }})
  }

  public fetchCoupons(){
    if (!this.cartBusinessId)
      return
    this.couponService.getCouponsFiltered(this.cartBusinessId).subscribe({
      next: (data)=>{
        this.coupons = data?.dto
      }
    })
  }

  public update(params: { id?: number, completionDate?: Date | string}): Observable<any>{
    return this.http.put<any>(this.baseUrl, params)
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
