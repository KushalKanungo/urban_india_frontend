import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { BusinessServiceModal } from '../_models/business_service';
import { SmallCardConfig } from '../business-service-card-small/business-service-card-small.component';
import { Coupon } from '../_models/coupon';
import { CouponService } from '../_services/coupon.service';
import { DeviceDetectorService } from '../_services/device-detector.service';
import { OrdersService } from '../_services/orders.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  isMobile = false;
  cardConfig!: SmallCardConfig;
  orderParam: {
    couponId?: number;
    addressId: number;
  } = {addressId: 0 };
  constructor(
    public cartService: CartService,
    public couponService: CouponService,
    private deviceDetector: DeviceDetectorService,
    private ordersService: OrdersService,
    private toasterService: MessageService
  ) {
    this.isMobile = deviceDetector.isMobile();
  }

  public isCardSideBarVisible = false;
  ngOnInit() {
    this.cardConfig = {
      showPrice: true,
      showRatings: false,
    };

    this.cartService.getCartServices().subscribe({
      next: (data: any) => {
        this.cartService.cartItems = data.dto.map((res: any) => res);
        this.cartService.getCartPrice(this.cartService.cartItems);
        this.cartService.cartBusinessId =
          this.cartService.cartItems[0]?.businessService.businessId;
        this.cartService.fetchCoupons();
      },
    });
    this.cartService.fetchAddress();
  }

  selectCoupon(coupon: Coupon | undefined) {
    this.cartService.selectedCoupon = coupon;
    this.orderParam.couponId = coupon?.id;
  }

  removeFromCart(id: number) {
    this.cartService.removeServiceToCart(id);
  }

  placeOrder() {
    this.ordersService.placeOrder(this.orderParam).subscribe({
      next: () => {
        this.toasterService.add({
          severity: 'success',
          detail: 'Order placed successfully',
        });
        this.isCardSideBarVisible = false;
      },
    });
  }
}
