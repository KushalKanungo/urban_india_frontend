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
  constructor(private authService: AuthService, private router: Router) {}
  private REDIRECT_URI = 'services';
  private clientId = environment.clientId;
  loading = false;

  private afterLogin = (response: SignInResponse) => {
    this.authService.saveAccessToken(response.accessToken);
    console.log(this.authService.isAuthorized());
    this.loading = false;
    this.router.navigate([this.REDIRECT_URI]);
    console.log('SignedInSuccessfully');
  };

  ngOnInit() {
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: this.clientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true,
      });
      // @ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById('buttonDiv'),
        {
          'width': 20,
          'height': 60,
          'longtitle': false,
          'theme': 'dark',
        }
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };

    // @ts-ignore
    google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById('buttonDiv'),
      {
        'width': 20,
        'height': 60,
        'longtitle': false,
        'theme': 'dark',
      }
    );
  }

  signInForm: FormGroup = new FormGroup({
    usernameOrEmail: new FormControl('aman', [Validators.required]),
    password: new FormControl(123456, [Validators.required]),
  });

  googleButttonHandeler() {
    let button: HTMLButtonElement = document.querySelector("div[role=button]") as HTMLButtonElement
    button.click()
  
  }

  handleCredentialResponse(response: any) {
    console.log(response.credential);
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

  signInButtonHandeler() {
    // this.googleButttonHandeler();
    let signInDetails = {
      userNameOrEmail: this.signInForm.value['usernameOrEmail'],
      password: this.signInForm.value['password'],
    };
    this.loading = true;
    this.authService.login(signInDetails).subscribe({
      next: this.afterLogin,
    });
  }
}
