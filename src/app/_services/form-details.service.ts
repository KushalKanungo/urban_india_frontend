import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Service } from '../_models/service';
import { getLocaleNumberFormat } from '@angular/common';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FormDetailsService {
  private BASE_URL = `${environment.baseUrl}/api`;

  constructor(private http: HttpClient) {}

  getAllService(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL + '/service').pipe(
      map((res) => {
        return res.map((service) => {
          return { label: service.title, value: service.id };
        });
      })
    );
  }

  getAllBusinessList():Observable<any[]>{
    return this.http.get<any[]>(this.BASE_URL+`/business/all`).pipe(
      map((res) => {
        return res.map((business) => {
          return { label: business.name, value: business.id };
        });
      })
    );
  }
}
