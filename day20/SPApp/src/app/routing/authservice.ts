import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,tap, pipe} from 'rxjs';
@Injectable()
export class AuthService {
  constructor(public http:HttpClient){

  }

  login(email: string, password: string): Observable<any> {
    let authenticateUrl:string="http://localhost:8888/api/authenticate";
    let body:any={"email":email ,"password":password};
   
    return this.http.post(authenticateUrl,body).pipe(
      tap(data => console.log( "ppppppp  " +data))
    );
   }

  logout(): any { localStorage.removeItem('receivedToken'); }

  getUser(): any { return localStorage.getItem('receivedToken'); }

  isLoggedIn(): boolean { return this.getUser() !== null;}
}