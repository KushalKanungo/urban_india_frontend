import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CouponFormComponent } from '../coupon-form/coupon-form.component';

@Component({
  selector: 'app-coupon-section',
  templateUrl: './coupon-section.component.html',
  styleUrls: ['./coupon-section.component.scss']
})
export class CouponSectionComponent {
  ref!: DynamicDialogRef;

  constructor(private readonly dialogService: DialogService) { }
  
  openForm(edit:boolean = false){
    this.ref = this.dialogService.open(CouponFormComponent, {
      header: 'Add Coupon',
      data: { editMode: true },
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

}
