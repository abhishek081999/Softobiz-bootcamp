import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  salesData: ChartData<'bar'> = {
    labels: ['Punctuality', 'Communication', 'Problem Solving',
    'Team Player', 'Coding', 'Technical Knowledge', 'Meeting Deadlines'],
    datasets: [
      { data: [3, 1, 2, 3, 4, 5, 4], label: 'Ravi Tambade'  },
      { data: [4, 5, 2, 3, 4, 5, 4], label: 'Sachin Pande'  },
      {data: [3, 3,3,5, 4, 3, 6], label: 'Sarika Sharma'  },
      { data: [5, 5, 2, 3, 4, 5, 5], label: 'Pankaj Kumar'  }
    ],
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'BootCamp Assessment',
      },
    },
  };
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
