import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessServiceCardComponent } from './business-service-card.component';

describe('BusinessServiceCardComponent', () => {
  let component: BusinessServiceCardComponent;
  let fixture: ComponentFixture<BusinessServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessServiceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
