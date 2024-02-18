import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { BusinessServiceModal } from '../_models/business_service';
import { SmallCardConfig } from '../business-service-card-small/business-service-card-small.component';
import { Coupon } from '../_models/coupon';
import { CouponService } from '../_services/coupon.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  
  cardConfig!: SmallCardConfig
  constructor(public cartService: CartService, public couponService: CouponService){ }

  public isCardSideBarVisible = false
  ngOnInit(){
    this.cardConfig = {
      showPrice: true,
      showRatings: false
    }

    this.cartService.getCartServices().subscribe({next: (data: any)=>{
      
      this.cartService.cartItems = data.dto.map((res: any) => res)
      this.cartService.getCartPrice(this.cartService.cartItems)
      this.cartService.cartBusinessId = this.cartService.cartItems[0]?.businessService.businessId 
      this.cartService.fetchCoupons()
      
    }})
  }


  selectCoupon(coupon: Coupon | undefined){
    this.cartService.selectedCoupon = coupon
  }

  removeFromCart(id: number){
    this.cartService.removeServiceToCart(id)
  }


}
