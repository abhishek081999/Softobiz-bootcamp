import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliverTrackerService {

  constructor(public http:HttpClient) { }

  public GetAllPendingDeliveries():Observable<any>
  {
    let restApiUrl:string="http://localhost:7777/api/delivery";
    return this.http.get(restApiUrl);
  }

  
}
