import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private BASE_URL = `${environment.baseUrl}/api/business/all`;
  constructor(private http:HttpClient) { }

  addBusiness(businessDetails:FormData):Observable<any>{
    return this.http.post(this.BASE_URL,businessDetails);


  }
}
