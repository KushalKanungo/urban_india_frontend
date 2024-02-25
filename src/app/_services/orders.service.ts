import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Order } from '../_models/order';
import { OrderItem } from '../_models/order-item';
import { toStatus } from '../_enum/status';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly http: HttpClient) { }
  baseUrl = `${environment.baseUrl}/api/orders`

  placeOrder(params: { addressId: number, couponId?: number }){
    return this.http.post(this.baseUrl, params)
  }

  getMyOrders(params = {per: 10, page: 0, paginate: true }): Observable<{data: Order[], total: number, page: number, per: number}>{
    const httpParams = new HttpParams({fromObject: params})
    return this.http.get(this.baseUrl,{params: httpParams}).pipe(map((res: any)=>{
      res['dto']['data'] = (res['dto']['data'] as any[]).map((order)=>{
        return {
          id: order.id,
          address: order.address,
          business: {
            id: order.businessId,
            name: order.businessName
          },
          coupon: order.coupon,
          status: toStatus(order.status),
          price: order.price,
          effectivePrice: order.effectivePrice,
          orderItems: (order.orderItems as any[]).map((item)=>{
            return {
              id: item.id,
              completionDate: item.completionDate,
              status: toStatus(item.status),
              effectivePrice: item.effectivePrice,
              businessService: {
                id: item.businessServiceId,
                name: item.businessServiceName,
                price: item.businessServicePrice,
              }
            } as OrderItem
          })

        } as Order
      })
      return res['dto']
    }))
  }
}
