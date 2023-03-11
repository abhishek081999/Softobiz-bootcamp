import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = "http://localhost:7000/api/";

@Injectable({
  providedIn: 'root'
})
export class ShiperService {
  static getShipers() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getShipers(){
    return this.http.get(api+'payments');
  }

  addShiper(data:any){
    return this.http.post<any>(api+'payments',data)
  }
}