import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



export class Credential{
  constructor(public email:string, 
              public password:string){

  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:Credential=new Credential("raj.malhotra@gamil.com","simran");
  public restapiUrl="http://localhost:7777/api/authenticate";

  constructor(private http:HttpClient) { }

  //Component Life cycle event 
  
  ngOnInit(): void {

  }
  onSubmit():void{
    console.log(this.user);
    console.log("form submit event occured....");
    this.http.post(this.restapiUrl,this.user).subscribe(
    (data) => {
        console.log(data);
    }
    );
  }
}
