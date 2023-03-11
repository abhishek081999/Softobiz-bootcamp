import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHubService {

  constructor(private http: HttpClient) { }
  
  public GetProducts():Observable<any>{
    //HTTP Request get to external server  
    let restApiUrl:string="http://localhost:7777/api/products";
    return this.http.get(restApiUrl);
  }

  public GetProductDetails(id:number):Observable<any>{
    let restApiUrl:string="http://localhost:7777/api/products/"+id;
    return this.http.get(restApiUrl);
  }
}
