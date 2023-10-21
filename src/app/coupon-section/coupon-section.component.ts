import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CouponFormComponent } from '../coupon-form/coupon-form.component';
import { Coupon } from '../_models/coupon';
import { CouponService } from '../_services/coupon.service';

@Component({
  selector: 'app-coupon-section',
  templateUrl: './coupon-section.component.html',
  styleUrls: ['./coupon-section.component.scss']
})
export class CouponSectionComponent implements OnInit{
  ref!: DynamicDialogRef;

  constructor(private readonly dialogService: DialogService, private readonly couponService: CouponService) { }
  
  coupons: Coupon[] =  [
    {
      id: 1,
      startTime: '2023-01-01',
      endTime: '2023-02-01',
      percent: 10,
      code: 'COUPON10',
      minimumAmount: 50.00,
    },
    {
      id: 2,
      startTime: '2023-02-15',
      endTime: '2023-03-15',
      percent: 20,
      code: 'SPRINGSALE',
      minimumAmount: 30.00,
    },
    {
      id: 3,
      startTime: '2023-03-01',
      endTime: '2023-04-01',
      percent: 15,
      code: 'MARCH15',
      minimumAmount: 25.00,
    },
    {
      id: 4,
      startTime: '2023-04-10',
      endTime: '2023-05-10',
      percent: 25,
      code: 'SPRING25',
      minimumAmount: 40.00,
    },
    {
      id: 5,
      startTime: '2023-05-05',
      endTime: '2023-06-05',
      percent: 30,
      code: 'MAYSALE30',
      minimumAmount: 60.00,
    },
    {
      id: 6,
      startTime: '2023-06-15',
      endTime: '2023-07-15',
      percent: 10,
      code: 'SUMMERSALE',
      minimumAmount: 50.00,
    },
    {
      id: 7,
      startTime: '2023-07-01',
      endTime: '2023-08-01',
      percent: 20,
      code: 'JULY20',
      minimumAmount: 35.00,
    },
    {
      id: 8,
      startTime: '2023-08-10',
      endTime: '2023-09-10',
      percent: 15,
      code: 'BACKTOSCHOOL',
      minimumAmount: 30.00,
    },
    {
      id: 9,
      startTime: '2023-09-01',
      endTime: '2023-10-01',
      percent: 25,
      code: 'FALL25',
      minimumAmount: 40.00,
    },
    {
      id: 10,
      startTime: '2023-10-15',
      endTime: '2023-11-15',
      percent: 30,
      code: 'HALLOWEEN30',
      minimumAmount: 60.00,
    },
  ];
  
  ngOnInit(): void {
    this.fetchCoupons()
  }

  formatDate(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  openForm(event: any, edit:boolean = false, coupon: Coupon | undefined = undefined){
    this.ref = this.dialogService.open(CouponFormComponent, {
      header: edit ? 'Edit Coupon' : 'Add Coupon',
      data: { editMode: edit, coupon: coupon},
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe({next: (couponValues)=>{
      if (couponValues){
        const tempCoupon: Coupon = {
          code: couponValues.code.toUpperCase(),
          minimumAmount: couponValues.minimumAmount,
          percent: couponValues.percent,
          startTime: this.formatDate(couponValues.dateRange[0]), 
          endTime: this.formatDate(couponValues.dateRange[1]) 
        } 
        console.log(tempCoupon);
        if (edit && coupon?.id !== undefined){
          this.couponService.updateCoupon(coupon.id, tempCoupon).subscribe({next: ()=> { this.fetchCoupons() } })
        }
        else{
          this.couponService.addCoupon(tempCoupon).subscribe({next: ()=> { this.fetchCoupons() } })
        }
      }

    }})
  }

  fetchCoupons(){
    this.couponService.getCoupons().subscribe({next: (data)=>{
      console.log(data);
      this.coupons = data?.dto
    }})
  }

  deleteCoupon(event: any, coupon_id: number | undefined){
    console.log("deleting coupon", coupon_id);
    
    if (coupon_id) 
      this.couponService.deleteCoupon(coupon_id).subscribe({ next: () => { this.fetchCoupons(  ) }})
  }
  
}
