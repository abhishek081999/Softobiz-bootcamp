import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductHubService } from '../product-hub.service';


//Decorator:
// Metadata about class needed by Angular engine

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  flowers:any=[];

  constructor(public svc:ProductHubService) { }
  
  ngOnInit(): void {
    this.svc.GetProducts().subscribe(
      (data)=>{
        this.flowers=data;
        console.log(this.flowers);
      },
      err=>{
        console.log(err);
      }
    )
    }
}

//DRY Design Principle
