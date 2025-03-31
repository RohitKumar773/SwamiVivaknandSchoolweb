import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  public pieChartData: ChartData<'pie'> = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [60, 40], // Replace with actual student data
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

}
