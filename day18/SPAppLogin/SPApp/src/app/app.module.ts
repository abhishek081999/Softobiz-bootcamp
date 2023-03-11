import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule,Routes} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ContainerComponent } from './container/container.component';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';


export const routes:Routes=[
  {path :'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'list',component:ListComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    DetailsComponent,
    ContainerComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
