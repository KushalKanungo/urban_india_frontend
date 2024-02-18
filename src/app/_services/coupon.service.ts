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
  BASE_APP_URL = environment.baseUrl

  addCoupon(coupon: Coupon): Observable<any>{
    return this.http.post<any>(this.BASE_URL, coupon)
  }
  
  deleteCoupon(coupon_id: number){
    return this.http.delete<any>(`${this.BASE_URL}/${coupon_id}`)
  }

  updateCoupon(coupon_id: number, coupon: Coupon){
    return this.http.put<any>(`${this.BASE_URL}/${coupon_id}`, coupon)
  }

  getCoupons(): Observable<any>{
    return this.http.get(this.BASE_URL)
  }
  
  getCouponsFiltered(businessId: number): Observable<any>{
    return this.http.get<any>(`${this.BASE_APP_URL}/api/businesses/${businessId}/coupons`)
    
  }

}
