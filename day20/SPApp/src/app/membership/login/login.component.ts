import { HttpClient } from '@angular/common/http';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { MembershipService } from '../membership.service';
import { Credential } from '../credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy { 
  private count:Number| undefined;
  //Hollywood Design Principle
  //Do not call me, I will call you.
  
  public restapiUrl="http://localhost:7777/api/authenticate";


  public user:Credential=new Credential("","");

  constructor(private svc:MembershipService) { 
    console.log("Login component constructor invoked...");
  }

  //Component Life cycle event 
  ngOnInit(): void {
    console.log("Login component onInit invoked...");
  }

  ngOnDestroy():void{
    console.log("Login component onDestroy invoked...");
  }

  onSubmit():void{
   
     this.svc.Login(this.user).subscribe(
          (data) => {
              console.log(data);
          });
  }
}