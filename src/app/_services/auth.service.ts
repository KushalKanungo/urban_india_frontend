import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export type SignInResponse = {
  accessToken: string;
  tokenType: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private ACCESS_TOKEN_KEY_NAME = 'accessToken';
  private AUTH_FAILED_REDIRECT_URL = 'http://localhost:4200/login';
  private BASE_URL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(signinDetails: {
    userNameOrEmail: String;
    password: String;
  }): Observable<SignInResponse> {
    return this.http
      .post<SignInResponse>(`${this.BASE_URL}/signin`, signinDetails)
      .pipe(
        tap((response) => {
          this.saveAccessToken(response.accessToken);
        })
      );
  }

  signup(signupDetails: FormData): Observable<unknown> {
    return this.http.post<unknown>(`${this.BASE_URL}/signup`, signupDetails);
  }

  saveAccessToken(accessToken: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY_NAME, accessToken);
  }

  loadAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY_NAME);
  }

  clearAccessToken() {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY_NAME);
  }

  isAuthorized?(): boolean {
    return this.loadAccessToken() ? true : false;
  }

  fallBack() {
    this.clearAccessToken();
    this.router.navigateByUrl(this.AUTH_FAILED_REDIRECT_URL);
  }
}
