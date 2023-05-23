import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRegisterFormComponent } from './business-register-form.component';

describe('BusinessRegisterFormComponent', () => {
  let component: BusinessRegisterFormComponent;
  let fixture: ComponentFixture<BusinessRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
