import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credential } from './credential';
@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(public http:HttpClient) { }

  public Login(credential:Credential):Observable<any>
  {
    let restApiUrl:string="http://localhost:7777/api/authenticate";
    return this.http.get(restApiUrl);
  }

  public Register(newUser:any):Observable<any>
  {
    let restApiUrl:string="http://localhost:7777/api/register";
    return this.http.post(restApiUrl,newUser);

  }

  public ChangePassword(userDetails:any):Observable<any>
  {
    let restApiUrl:string="http://localhost:7777/api/changepassword";
    return this.http.post(restApiUrl,userDetails);

  }
}
