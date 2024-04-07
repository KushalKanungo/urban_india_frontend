import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Review } from '../_models/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseUrl = `${environment.baseUrl}/api`
  constructor(private readonly http: HttpClient) { }

  postReview(orderItemId: number, review: { rating: number, description: string }){
    return this.http.post(`${this.baseUrl}/orderItem/${orderItemId}/reviews`, review)
  }

  getBusinessServiceReviews(businessServiceId: number){
    return this.http.post<{ dto: { data: any }}>(`${this.baseUrl}/businessService/${businessServiceId}/reviews`, {}).pipe(map(( res: { dto: any })=>{
        res.dto.data = this.reviewMapper(res.dto.data)
        return res
    }))
  }

  getBusinessReviews(businessId: number){
    return this.http.get<{ dto: { data: any }}>(`${this.baseUrl}/businessService/${businessId}/reviews`).pipe(map(({ dto })=>{
        dto.data = this.reviewMapper(dto.data)
    }))
  }



  private reviewMapper(reviewsArrayResponse: any[]){
      return reviewsArrayResponse.map((review) => {
        return {
          id: review.id,
          rating: review.rating,
          user: {
            id: review.userId,
            name: review.userName
          },
          businessService: {
            id: review.businessServiceId,
            name: review.businessServiceName
          },
          description: review.description,
        } as Review
    })
  }
}
