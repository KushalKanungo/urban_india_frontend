import { Component, Input } from '@angular/core';
import { BusinessService } from '../_models/business_service';

@Component({
  selector: 'app-business-service-card',
  templateUrl: './business-service-card.component.html',
  styleUrls: ['./business-service-card.component.scss'],
})
export class BusinessServiceCardComponent {
  @Input() businessServiceData!: BusinessService;
}
