import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessServiceListPageComponent } from './business-service-list-page/business-service-list-page.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { SignupPageComponent } from './_pages/signup-page/signup-page.component';
import { BusinessRegisterFormComponent } from './business-register-form/business-register-form.component';
import { AuthGuard } from './_guards/auth.guard';
import { BusinessPageComponent } from './_pages/business-page/business-page.component';
import { MyBusinessPageComponent } from './_pages/my-business-page/my-business-page.component';
import { BusinessServicePageComponent } from './_pages/business-service-page/business-service-page.component';
// import { BusinessServiceResolver } from './_resolver/business-service.resolver';
import { businessServiceResolver } from './_resolver/businessService.resolver';
import {
  businessResolver,
  serviceResolver,
} from './_resolver/listing-data.resolver';
import { OrdersComponent } from './_pages/orders/orders.component';
import { AddressComponent } from './_pages/address/address.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  {
    path: 'services',
    component: BusinessServiceListPageComponent,
    canActivate: [AuthGuard],
    resolve: { businesses: businessResolver, services: serviceResolver },
  },
  { path: 'business/:id', component: BusinessPageComponent },

  { path: 'signup', component: SignupPageComponent, canActivate: [AuthGuard] },
  {
    path: 'add-business',
    component: BusinessRegisterFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-business',
    component: MyBusinessPageComponent,
  },
  {
    path: 'services/:serviceId',
    component: BusinessServicePageComponent,
    resolve: { data: businessServiceResolver },
  },
  {
    path: 'address',
    component: AddressComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
