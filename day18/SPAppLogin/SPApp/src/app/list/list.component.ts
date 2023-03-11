import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  restApiUrl:string="http://localhost:7777/api/products";
  flowers:any=[];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    //HTTP Request get to external server  
    this.http.get(this.restApiUrl).subscribe((data)=>{
        console.log(data);
        this.flowers=data;
    },
    err=>{
      console.log(err);
    }
    );
  }
}
