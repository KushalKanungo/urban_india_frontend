import { inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  provideRouter,
} from '@angular/router';
import { BusinessServicesService } from '../_services/business-services.service';
// import { BusinessServicePageComponent } from '../_pages/business-service-page/business-service-page.component';

export const businessServiceResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(BusinessServicesService).getBusinessServiceById(
    route.paramMap.get('serviceId')!,
  );
};
