import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
                HomeComponent,
                AboutUsComponent,
                ServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ HomeComponent,
    AboutUsComponent,
    ServicesComponent]
})
export class MainModule { }
