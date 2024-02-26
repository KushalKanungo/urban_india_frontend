import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Coupon } from '../_models/coupon';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.scss']
})
export class CouponFormComponent implements OnInit {
  date = ''
  inEditMode = false
  couponForm!: FormGroup
  constructor(private readonly ref: DynamicDialogRef, private readonly conf: DynamicDialogConfig) {}
  ngOnInit(): void {
    this.inEditMode = this.conf.data.editMode
    const coupon: Coupon | undefined = this.conf.data.coupon
      this.couponForm = new FormGroup({
        'code': new FormControl(coupon?.code ?? '',[Validators.required, Validators.max(12)]),
        'dateRange': new FormControl( this.createDataRange(coupon?.startTime, coupon?.endTime) ?? [],[Validators.required]),
        'percent': new FormControl(coupon?.percent ?? '',[Validators.required, Validators.min(1), Validators.max(99)]),
        'minimumAmount': new FormControl(coupon?.minimumAmount ?? '',[Validators.required])
      })
  }

  formSubmit(values: any){
    this.ref.close(values)
  }

  createDataRange(startDate: string | undefined, endDate:string | undefined){
    if (!startDate || !endDate){
      return null
    }
    
    return [new Date(startDate), new Date(endDate)]
  }
}
