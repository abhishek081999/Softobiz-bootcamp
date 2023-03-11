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
