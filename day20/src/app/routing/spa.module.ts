import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { LoggedInGuard } from "./loggedinguardservice";
import { AuthService } from "./authservice";
 
import { RouteContainerComponent } from './route-container/route-container.component';
import { HomeComponent } from "./root/home/home.component";
import { AboutusComponent } from "./root/aboutus/aboutus.component";
import { ContactComponent } from "./root/contact/contact.component";
import { ProductListComponent } from "./productCatalog/product-list/product-list.component";
import { ProductDetailComponent } from "./productCatalog/product-detail/product-detail.component";
import { PagenotfoundComponent } from "./root/pagenotfound/pagenotfound.component";
import { ProductUpdateComponent } from "./productCatalog/product-update/product-update.component";
import { ProductCreateComponent } from "./productCatalog/product-create/product-create.component";
import { ProductDeleteComponent } from "./productCatalog/product-delete/product-delete.component";

import { ProtectedComponent } from "./root/protected/protected.component";

import { DashboardComponent } from "./bi/dashboard/dashboard.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { BIModule } from "./bi/bi.module";
import { BarChartComponent } from "./bi/bar-chart/bar-chart.component";
import { LineChartComponent } from "./bi/line-chart/line-chart.component";
import { DoughnutController } from "chart.js";
import { DoughnutChartComponent } from "./bi/doughnut-chart/doughnut-chart.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./authinterceptor";

 
export const childRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'bar', component: BarChartComponent },
    { path: 'line', component:LineChartComponent},
    { path: 'doughnut', component:DoughnutChartComponent},
  ];
  
  
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent },
    {path: 'about', component:AboutusComponent },
    {path: 'contact',component: ContactComponent },
    {path: 'lists', component: ProductListComponent},
    {path: 'lists/:id', component: ProductDetailComponent},
    {path: 'create', component: ProductCreateComponent},
    {path: 'update/:id', component: ProductUpdateComponent},
    {path: 'delete/:id', component: ProductDeleteComponent},
    {path: 'dashboard', component: DashboardComponent,children:childRoutes},
    {path: 'protected',component: ProtectedComponent,canActivate: [LoggedInGuard] },

    // { path: '**', component: PagenotfoundComponent },
  ];
  


@NgModule({
    declarations: [
        RouteContainerComponent,
        HomeComponent, AboutusComponent, ContactComponent,
        ProductListComponent , ProductDetailComponent,
        PagenotfoundComponent, ProductUpdateComponent,
        ProductCreateComponent,ProductDeleteComponent,
     
        
        SignInComponent,
        ProtectedComponent,
        RouteContainerComponent
    ],
    exports: [
        RouteContainerComponent,
        HomeComponent, AboutusComponent, ContactComponent,
        ProductListComponent , ProductDetailComponent,
        PagenotfoundComponent, ProductUpdateComponent,ProductCreateComponent,
        ProductDeleteComponent,
        SignInComponent,
        ProtectedComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        BIModule,
        RouterModule.forRoot(routes) 
    ],

    providers:[
        AuthService,
        LoggedInGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }],
})
export class SPPAModule{}