import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private BASE_URL = 'http://localhost:8080/api/business/all';
  constructor(private http:HttpClient) { }

  addBusiness(businessDetails:FormData):Observable<any>{
    return this.http.post(this.BASE_URL,businessDetails);

  
  }
}
