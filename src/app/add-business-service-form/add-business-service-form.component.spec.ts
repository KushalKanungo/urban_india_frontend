import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessServiceFormComponent } from './add-business-service-form.component';

describe('AddBusinessServiceFormComponent', () => {
  let component: AddBusinessServiceFormComponent;
  let fixture: ComponentFixture<AddBusinessServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBusinessServiceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBusinessServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
