import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class BIModule { }
