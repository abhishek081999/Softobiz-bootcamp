import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiService {

  constructor(public http:HttpClient) { }
  public GetTopTenCustomers():Observable<any>{
    let urlTopTen="http://localhost:7777/topten/";
    return this.http.get(urlTopTen);
  }

  public GetCustomerOrderHistory(id:number):Observable<any>{
    let urlTopTen="http://localhost:7777/orderhistory/"+id;
    return this.http.get(urlTopTen);
  }
}
