import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    InsertComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListComponent,
    DetailsComponent
  ]
})
export class CatalogModule { }
