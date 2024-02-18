import { Component, Input } from '@angular/core';
import { Coupon } from '../_models/coupon';

@Component({
  selector: 'app-coupon-card',
  templateUrl: './coupon-card.component.html',
  styleUrls: ['./coupon-card.component.scss']
})
export class CouponCardComponent {
  @Input() coupon!: Coupon
  @Input() settings: {edit: boolean, time: boolean} = {
    edit: false,
    time: false
  }


}
