import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessServiceListPageComponent } from './business-service-list-page.component';

describe('BusinessServiceListPageComponent', () => {
  let component: BusinessServiceListPageComponent;
  let fixture: ComponentFixture<BusinessServiceListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessServiceListPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessServiceListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
