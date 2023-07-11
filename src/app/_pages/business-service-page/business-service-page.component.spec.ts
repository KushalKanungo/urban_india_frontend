import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessServicePageComponent } from './business-service-page.component';

describe('BusinessServicePageComponent', () => {
  let component: BusinessServicePageComponent;
  let fixture: ComponentFixture<BusinessServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessServicePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
