import { inject } from '@angular/core';
import {
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  provideRouter,
} from '@angular/router';
import { FormDetailsService } from '../_services/form-details.service';

export const businessResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(FormDetailsService).getAllBusinessList();
};

export const serviceResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(FormDetailsService).getAllService();
};
