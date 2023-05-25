import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { Button, ButtonModule } from 'primeng/button';
import { BusinessServiceCardComponent } from './business-service-card/business-service-card.component';
import { BusinessServiceListPageComponent } from './business-service-list-page/business-service-list-page.component';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SignupComponent } from './signup/signup.component';
import { SignupPageComponent } from './_pages/signup-page/signup-page.component';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { BusinessRegisterFormComponent } from './business-register-form/business-register-form.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginComponent,
    BusinessServiceCardComponent,
    BusinessServiceListPageComponent,
    SearchBarComponent,
    SignupComponent,
    SignupPageComponent,
    BusinessRegisterFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DialogModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropdownModule,
    FileUploadModule,
    SliderModule,
    MultiSelectModule,
    DynamicDialogModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
