import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  locations = ['Pune','Mumbai','Delhi','Bangalore','Nashik','Chennai','Mandi','Bhuvneshwar','Shimla'];
  memberShips = [
                 {value:'G',display:'Gold'},
                 {value:'S',display:'Silver'},
                 {value:'P',display:'Platinum'}
  ];
 
  social =[
             {value:'T',display:'Twitter'},
             {value:'F',display:'Facebook'},
             {value:'B',display:'Blog'}
  ];
  
  socialStatus = ['T', 'B'];


  model=new Customer('Ravi','Tambade','ravi.tambade@transflower.in',9881735801,28,
                     new Date(1975,18,8),this.locations[0],
                     this.memberShips[1].value,
                     false,this.socialStatus);


  constructor(private svc:MembershipService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    this.submitted=true;
    console.log('you submitted value:', form);
  }

  showCustomer(form:any){
        return form && form.controls['firstName'] && form.controls['firstName'].value;
  }

  showFormControls(form:any){
    return form && form.controls['firstName'] && form.controls['firstName'].value;
  }


}
