import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponSectionComponent } from './coupon-section.component';

describe('CouponSectionComponent', () => {
  let component: CouponSectionComponent;
  let fixture: ComponentFixture<CouponSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
