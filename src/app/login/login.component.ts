import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { SignInResponse } from '../_types/SignInResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
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
        console.log('SignedInSuccessfully');
        localStorage.setItem('accessToken', res.accessToken);
      },
    });
  }
}
