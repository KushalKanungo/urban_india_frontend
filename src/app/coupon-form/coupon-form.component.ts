import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Coupon } from '../_models/coupon';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.scss']
})
export class CouponFormComponent {
  date = ''

  constructor(private readonly ref: DynamicDialogRef) {}
  couponForm = new FormGroup({
    'code': new FormControl('',[Validators.required, Validators.max(12)]),
    'dateRange': new FormControl('',[Validators.required]),
    'percent': new FormControl('',[Validators.required, Validators.min(1), Validators.max(99)]),
    'minimumAmount': new FormControl('',[Validators.required])
  })

  formSubmit(values: any){
    console.log(values);
    this.ref.close(values)
  }
}
