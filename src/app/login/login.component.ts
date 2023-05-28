import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService, SignInResponse } from '../_services/auth.service';
import { environment } from 'src/environment/environment';

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
          theme: 'filled',
          size: 'standard',
          width: '20%',
          shape: 'pill',
          longtitle: false,
        }
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };
  }

  signInForm: FormGroup = new FormGroup({
    usernameOrEmail: new FormControl('aman', [Validators.required]),
    password: new FormControl(123456, [Validators.required]),
  });

  googleButttonHandeler() {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: this.clientId,
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,
    });
    // @ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }

  handleCredentialResponse(response: any) {
    console.log(response.credential);
  }

  signInButtonHandeler() {
    let signInDetails = {
      userNameOrEmail: this.signInForm.value['usernameOrEmail'],
      password: this.signInForm.value['password'],
    };
    this.loading = true;
    this.authService.login(signInDetails).subscribe({
      next: (res: SignInResponse) => {
        this.authService.saveAccessToken(res.accessToken);
        console.log(this.authService.isAuthorized());
        this.loading = false;
        this.router.navigate([this.REDIRECT_URI]);
        console.log('SignedInSuccessfully');
      },
    });
  }
}
