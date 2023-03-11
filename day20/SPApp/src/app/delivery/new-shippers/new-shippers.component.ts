import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShiperService } from 'src/app/services/shiper.service';

@Component({
  selector: 'app-new-shippers',
  templateUrl: './new-shippers.component.html',
  styleUrls: ['./new-shippers.component.css']
})
export class NewShippersComponent implements OnInit {
  shiperService: any;
  paymentsData: any;

  

  ngOnInit(): void {
    this.AllShipers();  
  }

  

  AllShipers(){
    ShiperService.getShipers().subscribe((res: any) => {
      console.log(res);
      this.paymentsData = res;
      
    })
  }

}
