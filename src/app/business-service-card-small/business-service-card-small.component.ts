import { Component, Input } from '@angular/core';
import { BusinessServiceModal } from '../_models/business_service';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-business-service-card-small',
  templateUrl: './business-service-card-small.component.html',
  styleUrls: ['./business-service-card-small.component.scss']
})
export class BusinessServiceCardSmallComponent {

  @Input() businessServiceData!: BusinessServiceModal;
  @Input() showDeleteIcon!: boolean

  baseUrl = environment.baseUrl

  constructor(private router: Router) {}
  goToServicePage(){
    this.router.navigate(['service', this.businessServiceData.id])
  }

}
