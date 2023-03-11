import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { SharedModule } from '../shared/shared.module';
import { InbuiltPipeDemoComponent } from './inbuilt-pipe-demo/inbuilt-pipe-demo.component';
import { InbuiltDirectiveDemoComponent } from './inbuilt-directive-demo/inbuilt-directive-demo.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    InsertComponent,
    UpdateComponent,
    InbuiltPipeDemoComponent,
    InbuiltDirectiveDemoComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListComponent,
    DetailsComponent,
    InbuiltPipeDemoComponent,
    InbuiltDirectiveDemoComponent
  ]
})
export class CatalogModule { }
