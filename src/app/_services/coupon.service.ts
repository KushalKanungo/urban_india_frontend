import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Coupon } from '../_models/coupon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private readonly http: HttpClient) { }
  BASE_URL = `${environment.baseUrl}/api/coupon`

  addCoupon(coupon: Coupon): Observable<any>{
    return this.http.post<any>(this.BASE_URL, coupon)
  }

  getCoupons(): Observable<any>{
    return this.http.get(this.BASE_URL)
  }

}
