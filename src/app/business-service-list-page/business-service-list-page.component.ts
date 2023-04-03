import { Component } from '@angular/core';
import { BusinessService } from '../_models/business_service';

@Component({
  selector: 'app-business-service-list-page',
  templateUrl: './business-service-list-page.component.html',
  styleUrls: ['./business-service-list-page.component.scss'],
})
export class BusinessServiceListPageComponent {
  businessServices: BusinessService[] = [
    {
      id: 1,
      title: 'Tech Support',
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
      rating: 4.8,
      service_type: 'Technology',
    },
  ];
}
