import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { SignInResponse } from '../_types/SignInResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private BASE_URL = 'http://localhost:8080/api/auth';

  login(signinDetails: {
    userNameOrEmail: String;
    password: String;
  }): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(
      `${this.BASE_URL}/signin`,
      signinDetails
    );
  }

  signup(signupDetails: FormData) {
    return this.http.post<unknown>(`${this.BASE_URL}/signup`, signupDetails);
  }
}
