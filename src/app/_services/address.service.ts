import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Address } from '../_models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  baseUrl = `${environment.baseUrl}/address`

  getAllAddress(){
    return this.http.get(this.baseUrl)
  }

  addNewAddress(addressObject: any){
    return this.http.post(this.baseUrl, addressObject)
  }

  deleteAddress(addressId: number){
    return this.http.delete(`${this.baseUrl}/${addressId}`)
  }

  editAddress(addressId: number, newAddressModel: Address){
    return this.http.put(`${this.baseUrl}/${addressId}`, newAddressModel)
  }
}
