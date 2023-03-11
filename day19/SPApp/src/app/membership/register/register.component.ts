import { Component, OnInit } from '@angular/core';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private svc:MembershipService) { }

  ngOnInit(): void {
  }

}
