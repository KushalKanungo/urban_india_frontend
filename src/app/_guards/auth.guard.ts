import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      (state.url == '/' || state.url == '/login' || state.url == '/signup') &&
      this.authService.isAuthorized()
    ) {
      this.router.navigate(['/services']);
      return false;
    }

    if (
      (state.url == '/' || state.url == '/login' || state.url == '/signup') &&
      !this.authService.isAuthorized()
    ) {
      return true;
    }

    return this.authService.isAuthorized();
  }
}
