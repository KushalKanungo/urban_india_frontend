import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  genders = [{ name: 'Male' }, { name: 'Female' }, { name: 'Other' }];
}
