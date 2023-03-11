import { Component } from '@angular/core';

//attribute: C#
//meta data : C/ C++
//Decorator : typescript
//Annotation : Java
//data about data

@Component({
  selector: 'root-company',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPApp';
  company="Transflower Learning Pvt. Ltd."
  description="Mentor as a service";
  tagline="Doing ordinary things extra ordinarily...";
  imageurl="/assets/images/Transflower.jpg";
  message="Hi There";


  flowers:any=[];
  ngOnInit():void{

    this.flowers=[

      { title:"Lotus", description:"Puja Flower",unitprice:45, quantity:7000,likes:6500,imageurl:"/assets/images/lotus.jpg" },
      { title:"Gerbera", description:"Wedding Flower",unitprice:34, quantity:7655,likes:8700,imageurl:"/assets/images/gerbera.jpg" },
      { title:"Rose", description:"Valentine Flower",unitprice:26, quantity:4500,likes:600,imageurl:"/assets/images/rose.jpg" },
      { title:"Jasmine", description:"Smelling Flower",unitprice:4, quantity:900,likes:3400,imageurl:"/assets/images/jasmine.jpg" },
      { title:"lily", description:"Delicate Flower",unitprice:12, quantity:349,likes:8900,imageurl:"/assets/images/lily.jpg" },
      { title:"Marigold", description:"Festival Flower",unitprice:12, quantity:34500,likes:8870,imageurl:"/assets/images/marigold.jpg" }
    ]

  }

  //Event Handler
  clickMe(){
    this.message="HI I am clicked.....";
    this.title = 'FullStack Boot Camp';
    this.company="Sofobiz Solutions"
    this.description="The Best working Enviornment";
    this.tagline="Top of the World";
    this.imageurl="/assets/images/softobiz.png";
    this.message="Welcome to tomorrows application development";
  }

  showMe(){
    this.title = 'SPApp';
    this.company="Transflower Learning Pvt. Ltd."
    this.description="Mentor as a service";
    this.tagline="Doing ordinary things extra ordinarily...";
    this.imageurl="/assets/images/Transflower.jpg";
    this.message="Hi There";
  }
}
