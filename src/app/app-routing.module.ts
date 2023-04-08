import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessServiceListPageComponent } from './business-service-list-page/business-service-list-page.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: BusinessServiceListPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
