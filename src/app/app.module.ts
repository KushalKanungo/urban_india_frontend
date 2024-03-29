import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { CalendarModule } from 'primeng/calendar';
import { AvatarModule } from 'primeng/avatar';
import { BusinessServiceCardComponent } from './business-service-card/business-service-card.component';
import { BusinessServiceListPageComponent } from './business-service-list-page/business-service-list-page.component';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { CarouselModule } from 'primeng/carousel';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SignupComponent } from './signup/signup.component';
import { SignupPageComponent } from './_pages/signup-page/signup-page.component';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { BusinessRegisterFormComponent } from './business-register-form/business-register-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuModule } from 'primeng/menu';
import { BusinessPageComponent } from './_pages/business-page/business-page.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ReviewPageComponent } from './_pages/review-page/review-page.component';
import { AuthInterceptor } from './_interceptors/auth_interceptor';
import { MyBusinessPageComponent } from './_pages/my-business-page/my-business-page.component';
import { AddBusinessServiceFormComponent } from './add-business-service-form/add-business-service-form.component';
import { BusinessServicePageComponent } from './_pages/business-service-page/business-service-page.component';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { CouponSectionComponent } from './coupon-section/coupon-section.component';
import { CouponFormComponent } from './coupon-form/coupon-form.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BusinessServiceCardSmallComponent } from './business-service-card-small/business-service-card-small.component';
import { CartComponent } from './cart/cart.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LOADING_BAR_CONFIG } from '@ngx-loading-bar/core';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { SidebarModule } from 'primeng/sidebar';
import { AddressFormComponent } from './address-form/address-form.component';
import { OrdersComponent } from './_pages/orders/orders.component';
import { ListboxModule } from 'primeng/listbox';
import { CouponCardComponent } from './coupon-card/coupon-card.component';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { AddressComponent } from './_pages/address/address.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
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
    BusinessPageComponent,
    ReviewCardComponent,
    ReviewPageComponent,
    MyBusinessPageComponent,
    AddBusinessServiceFormComponent,
    BusinessServicePageComponent,
    CouponSectionComponent,
    CouponFormComponent,
    BusinessServiceCardSmallComponent,
    CartComponent,
    AddressFormComponent,
    OrdersComponent,
    CouponCardComponent,
    AddressComponent,
    RatingFormComponent,
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
    AvatarModule,
    MenuModule,
    CarouselModule,
    ProgressBarModule,
    BreadcrumbModule,
    PaginatorModule,
    CalendarModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    ToastModule,
    LoadingBarHttpClientModule,
    SidebarModule,
    ListboxModule,
    PanelModule,
    TagModule,
  ],
  providers: [
    DialogService,
    ConfirmationService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
