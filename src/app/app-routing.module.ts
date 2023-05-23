import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessServiceListPageComponent } from './business-service-list-page/business-service-list-page.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { SignupPageComponent } from './_pages/signup-page/signup-page.component';
import { BusinessRegisterFormComponent } from './business-register-form/business-register-form.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'services', component: BusinessServiceListPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'add-business', component: BusinessRegisterFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
