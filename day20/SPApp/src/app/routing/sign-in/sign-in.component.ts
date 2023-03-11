import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  ngOnInit() { }

  public message: string;
  constructor(public authService: AuthService) {
    this.message = '';
  }

  login(username: string, password: string): any {
    this.message = '';
    this.authService.login(username, password).subscribe(
      (data)=>{
          console.log("00000"+ data);
          localStorage.setItem('receivedToken', data);
      }
    )
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}