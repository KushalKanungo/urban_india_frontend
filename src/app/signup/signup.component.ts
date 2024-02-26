import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    if (this.router.getCurrentNavigation()?.extras.state?.['email'])
      this.email = this.router.getCurrentNavigation()?.extras.state?.['email'];
  }
  email = '';
  genders = [{ name: 'Male' }, { name: 'Female' }, { name: 'Other' }];
  uploadedFile!: File | any;
  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl('Kushal', [Validators.required]),
    lastName: new FormControl('Kanungo', [Validators.required]),
    username: new FormControl('k4shal', [Validators.required]),
    email: new FormControl(this.email, [Validators.email]),
    gender: new FormControl('Select', [Validators.required]),
    phone_number: new FormControl('1234567890', [Validators.maxLength(10)]),
    password: new FormControl('12345', [Validators.required]),
  });

  ngOnInit(): void {
    if (this.email.length) {
      this.signupForm.get('email')?.setValue(this.email);
      this.signupForm.get('email')?.disable();
    }
  }

  onSelect($event: any) {
    for (const file of $event.files) {
      this.uploadedFile = file;
    }
  }

  signupButtonHandeler() {
    const signupDetails = new FormData();
    const data = this.signupForm.getRawValue();

    data['gender'] = data['gender'].name;
    signupDetails.set('data', JSON.stringify(data));

    signupDetails.set('file', this.uploadedFile);
    this.authService.signup(signupDetails).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
    });
  }
}
