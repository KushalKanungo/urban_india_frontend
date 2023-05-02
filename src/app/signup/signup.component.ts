import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  genders = [{ name: 'Male' }, { name: 'Female' }, { name: 'Other' }];
  uploadedFile!: File | any;

  onSelect($event: any) {
    for (let file of $event.files) {
      this.uploadedFile = file;
    }
  }

  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl('Kushal', [Validators.required]),
    lastName: new FormControl('Kanungo', [Validators.required]),
    username: new FormControl('k4shal', [Validators.required]),
    email: new FormControl('kk@gmial.com', [Validators.email]),
    gender: new FormControl('Select', [Validators.required]),
    phone_number: new FormControl('1234567890', [Validators.maxLength(10)]),
    password: new FormControl('12345', [Validators.required]),
  });

  signupButtonHandeler() {
    let signupDetails = new FormData();
    let data = this.signupForm.value;

    data['gender'] = data['gender'].name;
    signupDetails.set('data', data);
    signupDetails.set('file', this.uploadedFile);
    this.authService.signup(signupDetails).subscribe({
      next: () => {
        console.log('Signed up successfully');
      },
    });
  }
}
