import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inbuilt-directive',
  templateUrl: './inbuilt-directive-demo.component.html',
  styleUrls: ['./inbuilt-directive-demo.component.css']
})
export class InbuiltDirectiveDemoComponent implements OnInit {


  public isValidUser:boolean|undefined;
  public students:any=[];

  constructor() { }

  ngOnInit(): void {
    this.isValidUser=false;
    this.students=["Abhishek", "Akash", "Chaman", "Praveen", "Ritu", "Ruchi","Ravi", "Saurav", "Ganesh"];
  }
  
  toggle():void{
    if(this.isValidUser){
      this.isValidUser=false;
    }
    else{
      this.isValidUser=true;
    }
  }
}
