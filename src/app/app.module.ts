import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { LoginComponent } from './login/login.component';

import { PasswordModule } from 'primeng/password';
import { Button, ButtonModule } from 'primeng/button';
import { BusinessServiceCardComponent } from './business-service-card/business-service-card.component';
import { BusinessServiceListPageComponent } from './business-service-list-page/business-service-list-page.component';
import { DialogModule } from 'primeng/dialog';
import { SearchBarComponent } from './search-bar/search-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginComponent,
    BusinessServiceCardComponent,
    BusinessServiceListPageComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
