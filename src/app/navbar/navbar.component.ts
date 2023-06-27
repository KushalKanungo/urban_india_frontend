import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BusinessRegisterFormComponent } from '../business-register-form/business-register-form.component';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private dialogService: DialogService,
    private authService: AuthService
  ) {}
  ref!: DynamicDialogRef;

  show() {
    this.ref = this.dialogService.open(BusinessRegisterFormComponent, {
      header: 'Add a business',
      // width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe(() => {});

    this.ref.onMaximize.subscribe((value) => {});
  }

  logOut() {
    this.authService.fallBack();
  }

  items = [
    {
      label: 'Options',
      items: [
        {
          label: 'My Business',
          icon: 'pi pi-plus',
          command: () => {
            this.show();
          },
        },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {},
        },
      ],
    },
    {
      label: 'Navigate',
      items: [
        {
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io',
        },
        {
          label: 'Log Out',
          icon: 'pi pi-upload',
          command: () => {
            this.logOut();
          },
        },
      ],
    },
  ];

  navLinks = [
    {
      label: 'Home',
      routerLink: '/',
      icon: 'bi bi-house',
    },
    {
      label: 'Orders',
      routerLink: '/orders',
      icon: 'bi bi-bag-check',
    },
    {
      label: 'My Business',
      routerLink: '/my-business',
      icon: 'bi bi-shop',
    },
  ];
}
