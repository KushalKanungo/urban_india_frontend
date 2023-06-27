import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Service } from '../_models/service';
import { getLocaleNumberFormat } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FormDetailsService {
  private BASE_URL = 'http://localhost:8080/api';

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
}
