import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessServiceCardSmallComponent } from './business-service-card-small.component';

describe('BusinessServiceCardSmallComponent', () => {
  let component: BusinessServiceCardSmallComponent;
  let fixture: ComponentFixture<BusinessServiceCardSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessServiceCardSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessServiceCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
