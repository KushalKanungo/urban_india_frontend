import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../_models/service';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsService {

  private BASE_URL = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  getAllService():Observable<Service[]>{
    return this.http.get<Service[]>(this.BASE_URL+"/service");
  }


}
