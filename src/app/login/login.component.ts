import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService, SignInResponse } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  private REDIRECT_URI = 'services';
  signInForm: FormGroup = new FormGroup({
    usernameOrEmail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  signInButtonHandeler() {
    let signInDetails = {
      userNameOrEmail: this.signInForm.value['usernameOrEmail'],
      password: this.signInForm.value['password'],
    };
    this.authService.login(signInDetails).subscribe({
      next: (res: SignInResponse) => {
        this.router.navigate([this.REDIRECT_URI]);
        console.log('SignedInSuccessfully');
      },
    });
  }
}
