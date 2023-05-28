import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessServiceListPageComponent } from './business-service-list-page/business-service-list-page.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { SignupPageComponent } from './_pages/signup-page/signup-page.component';
import { BusinessRegisterFormComponent } from './business-register-form/business-register-form.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard] },
  {
    path: 'services',
    component: BusinessServiceListPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'signup', component: SignupPageComponent, canActivate: [AuthGuard] },
  {
    path: 'add-business',
    component: BusinessRegisterFormComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
