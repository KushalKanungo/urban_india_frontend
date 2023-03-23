import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, InputTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
