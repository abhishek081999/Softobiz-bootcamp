import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipe-demo',
  templateUrl: './inbuilt-pipe-demo.component.html',
  styleUrls: ['./inbuilt-pipe-demo.component.css']
})
export class InbuiltPipeDemoComponent implements OnInit {

  public dateToday: string|undefined;
  public name: string|undefined;
  public price:number=0;

  public person={
    "id":456,
    "firstname":"Sameer",
    "lastname":"Pande",
    "email":"Sameer.pande@gmail.com",
    "contactnumber":9881735801
  }

  constructor() { }

  ngOnInit(): void {
    this.dateToday=new Date().toDateString();
    this.name="Transflower Learning pvt. Ltd.";
    this.price=6000;
  }

}
