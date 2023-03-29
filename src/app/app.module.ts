import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { LoginComponent } from './login/login.component';

import { PasswordModule } from 'primeng/password';
import { Button, ButtonModule } from 'primeng/button';
import { BusinessServiceCardComponent } from './business-service-card/business-service-card.component';
@NgModule({
  declarations: [AppComponent, LoginPageComponent, LoginComponent, BusinessServiceCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
