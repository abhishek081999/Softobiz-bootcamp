import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

/*   title:string|undefined;
   description:string|undefined;
   unitprice:number=0;
   quantity:number=0;
   likes:number=0;
   imageurl:string="/assets/images/rose.jpg";
*/
  @Input () product:any;
  constructor() { }
 
  ngOnInit(): void {
   
   }

   //Event Handler
  onUpdate(ee:any):void{
    this.product.likes=ee.count;
  }
}
