import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';
import { CatalogModule } from './catalog/catalog.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { OrderProcessingModule } from './order-processing/order-processing.module';
import { MembershipModule } from './membership/membership.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './main/home/home.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { ServicesComponent } from './main/services/services.component';
import { ListComponent } from './catalog/list/list.component';
import { LoginComponent } from './membership/login/login.component';
import { RegisterComponent } from './membership/register/register.component';
import { PaymentProcessingModule } from './payment-processing/payment-processing.module';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { SPPAModule } from './routing/spa.module';
import { DashboardComponent } from './routing/bi/dashboard/dashboard.component';

export const routes:Routes=[
  {path :'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'list',component:ListComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'dashboard',component:DashboardComponent},
];

@NgModule({
  declarations: [
    //List of component belong to this package
    AppComponent,
    ContainerComponent,
 
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MainModule,
    CatalogModule,
    ShoppingCartModule,
    OrderProcessingModule,
    MembershipModule,
    PaymentProcessingModule,
    SharedModule,
    SPPAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
