import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Filter } from '../_models/filter';

@Injectable({
  providedIn: 'root',
})
export class BusinessServicesService {
  private BASE_URL = `${environment.baseUrl}/api/businessService`;

  constructor(private http: HttpClient) {}

  addBusinessService(obj: any): Observable<any> {
    return this.http.post(this.BASE_URL, obj);
  }

  getBusinessServiceById(id: string): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http.get(this.BASE_URL, { params });
  }

  getAllBusinessService(): Observable<any> {
    return this.http.get(this.BASE_URL + '/all');
  }

  getAllFilteredBusinssService(filterModel: Filter): Observable<any> {
    return this.http.post(this.BASE_URL + '/all-filter', filterModel);
  }
}
