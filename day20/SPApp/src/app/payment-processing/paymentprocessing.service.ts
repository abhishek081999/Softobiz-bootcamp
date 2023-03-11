
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentprocessingService {

 
  constructor(private http: HttpClient) { }
  
  public GetPayments():Observable<any>{
    //HTTP Request get to external server  
    let restApiUrl:string="http://localhost:7000/api/payments";
    return this.http.get(restApiUrl);
  }

  public GetPaymenttDetails(paymentid:number):Observable<any>{
    let restApiUrl:string="http://localhost:7000/api/payments/"+paymentid;
    return this.http.get(restApiUrl);
  }
}


