import { Component } from '@angular/core';
import { BusinessService } from '../_models/business_service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BusinessRegisterFormComponent } from '../business-register-form/business-register-form.component';

@Component({
  selector: 'app-business-service-list-page',
  templateUrl: './business-service-list-page.component.html',
  styleUrls: ['./business-service-list-page.component.scss'],
})
export class BusinessServiceListPageComponent {
  constructor(private dialogService: DialogService) {}
  ref!: DynamicDialogRef;
  businessServices: BusinessService[] = [
    {
      id: 1,
      title: 'Tech Support',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 4.6,
      service_type: 'Technology',
    },
    {
      id: 2,
      title: 'AC Cleaning',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      service_type: 'Technology',
    },
    {
      id: 3,
      title: 'Washing Machine Repair',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description: 'Car Driver',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      service_type: 'Technology',
    },
    {
      id: 4,
      title: 'Construction',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      service_type: 'Technology',
    },
    {
      id: 5,
      title: 'Tech Support',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      service_type: 'Technology',
    },
    {
      id: 6,
      title: 'Tech Support',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description:
        'All types of tech support. thid is a long sdessdotion  so thast ic an test that lons descrtiopotion can be put inmsdde here',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      service_type: 'Technology',
    },
    {
      id: 1,
      title: 'Tech Support',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 4.6,
      service_type: 'Technology',
    },
    {
      id: 2,
      title: 'AC Cleaning',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      service_type: 'Technology',
    },
    {
      id: 3,
      title: 'Washing Machine Repair',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description: 'Car Driver',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      service_type: 'Technology',
    },
    {
      id: 4,
      title: 'Construction',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      service_type: 'Technology',
    },
    {
      id: 5,
      title: 'Tech Support',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      service_type: 'Technology',
    },
    {
      id: 6,
      title: 'Tech Support',
      business_name: 'RegaTech',
      address: {
        google_code: '1234',
        city: 'Jaipur',
        flat_no: '204',
        state: 'Rajasthan',
      },
      mode: 1,
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      service_type: 'Technology',
    },
  ];

  show() {
    this.ref = this.dialogService.open(BusinessRegisterFormComponent, {
      header: 'Add a business',
      // width: '70%',
      height: '540px ',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe(() => {});

    this.ref.onMaximize.subscribe((value) => {});
  }
}
