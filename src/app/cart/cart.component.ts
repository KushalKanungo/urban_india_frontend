import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { BusinessServiceModal } from '../_models/business_service';
import { SmallCardConfig } from '../business-service-card-small/business-service-card-small.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  
  cardConfig!: SmallCardConfig
  constructor(public cartService: CartService){ }

  public isCardSideBarVisible = false
  ngOnInit(){
    this.cardConfig = {
      showPrice: true,
      showRatings: false
    }

    this.cartService.getCartServices().subscribe({next: (data: any)=>{
      
      this.cartService.cartItems = data.dto.map((res: any) => res)
      this.cartService.getCartPrice(this.cartService.cartItems)
      
    }})
  }

  removeFromCart(id: number){
    this.cartService.removeServiceToCart(id)
  }


}
