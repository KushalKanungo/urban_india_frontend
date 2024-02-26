import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService, SignInResponse } from '../_services/auth.service';
import { environment } from 'src/environment/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  private REDIRECT_URI = 'services';
  private clientId = environment.clientId;
  loading = false;

  private afterLogin = (response: SignInResponse) => {
    this.authService.saveAccessToken(response.accessToken);
    this.loading = false;
    this.router.navigate([this.REDIRECT_URI]);
  };

  ngOnInit() {
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      this.renderButton();
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };
  }

  signInForm: FormGroup = new FormGroup({
    usernameOrEmail: new FormControl('aman', [Validators.required]),
    password: new FormControl(123456, [Validators.required]),
  });

  googleButttonHandeler() {
    const buttonPlaceHolder = document.getElementById(
      'button-placeholder',
    ) as HTMLElement;
    if (buttonPlaceHolder?.childNodes.length < 1) {
      const span = new HTMLSpanElement();
      span.setAttribute('id', 'buttonDiv');
      buttonPlaceHolder.appendChild(span);
    }
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: this.clientId,
      callback: this.oAuth2ConsentCallback.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,
    });
    // @ts-ignore
    google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById('buttonDiv'),
      {
        width: 20,
        height: 60,
        longtitle: false,
        theme: 'dark',
      },
    );
    const button: HTMLButtonElement = document.querySelector(
      'div[role=button]',
    ) as HTMLButtonElement;
    button.click();
  }

  signInButtonHandeler() {
    const signInDetails = {
      userNameOrEmail: this.signInForm.value.usernameOrEmail,
      password: this.signInForm.value.password,
    };
    this.loading = true;
    this.authService.login(signInDetails).subscribe({
      next: this.afterLogin,
    });
  }

  private oAuth2ConsentCallback(response: any) {
    this.authService.googleAuth(response.credential).subscribe({
      next: this.afterLogin,
      error: (err: HttpErrorResponse) => {
        if (err.status === 404) {
          // Navigate to sigup page
          this.router.navigateByUrl('/signup', {
            state: {
              email: err.error.email,
            },
          });
        }
      },
    });
  }

  private renderButton() {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: this.clientId,
      callback: this.oAuth2ConsentCallback.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,
    });
    // @ts-ignore
    google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById('buttonDiv'),
      {
        width: 20,
        height: 60,
        longtitle: false,
        theme: 'dark',
      },
    );
  }
}
