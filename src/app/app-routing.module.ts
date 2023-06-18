import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessServiceListPageComponent } from './business-service-list-page/business-service-list-page.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { SignupPageComponent } from './_pages/signup-page/signup-page.component';
import { BusinessRegisterFormComponent } from './business-register-form/business-register-form.component';
import { AuthGuard } from './_guards/auth.guard';
import { BusinessPageComponent } from './_pages/business-page/business-page.component';
import { MyBusinessPageComponent } from './_pages/my-business-page/my-business-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard] },
  {
    path: 'services',
    component: BusinessServiceListPageComponent,
    canActivate: [AuthGuard],
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
