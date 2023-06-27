import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class BusinessServicesService {
  private BASE_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  addBusinessService(obj: any): Observable<any> {
    return this.http.post(this.BASE_URL + '/api/businessService', obj);
  }

  updateBusinessService(obj: any): Observable<any> {
    return this.http.put(this.BASE_URL + '/api/businessService', obj);
  }
}
