import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';

export type SignInResponse = {
  accessToken: string;
  tokenType: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private ACCESS_TOKEN_KEY_NAME = 'accessToken';
  private AUTH_FAILED_REDIRECT_URL = '/';
  private BASE_URL = `${environment.baseUrl}/api/auth`;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(signinDetails: {
    userNameOrEmail: string;
    password: string;
  }): Observable<SignInResponse> {
    return this.http
      .post<SignInResponse>(`${this.BASE_URL}/signin`, signinDetails)
      .pipe(
        tap(response => {
          this.saveAccessToken(response.accessToken);
        }),
      );
  }

  signup(signupDetails: FormData): Observable<unknown> {
    return this.http.post<unknown>(`${this.BASE_URL}/signup`, signupDetails);
  }

  googleAuth(idToken: string): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/google`, { idToken });
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

  isAuthorized(): boolean {
    return this.loadAccessToken() ? true : false;
  }

  fallBack() {
    this.clearAccessToken();
    this.router.navigate([this.AUTH_FAILED_REDIRECT_URL]);
  }

  logOut() {
    this.clearAccessToken();
  }
}
