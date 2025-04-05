import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allAdmissions: number = 0;
  allApplications: number = 0;
  allEmployee: number = 0;
  faculty: number = 0;
  allVehicle: number = 0;

  constructor(
    private _crud: CrudService
  ) { }


  ngOnInit() {
    this.getAdmission();
    this.getApplication();
    this.getEmployee();
    this.getAllFaculty();
    this.getVehicle();
  }

  getAdmission() {
    this._crud.getAllStudent().subscribe(
      (res: any) => {
        this.allAdmissions = res.data.length;
      }
    )
  }
  getApplication() {
    this._crud.getStdApplications().subscribe(
      (res: any) => {
        this.allApplications = res.data.length
      }
    )
  }
  getEmployee() {
    this._crud.getUser().subscribe(
      (res: any) => {
        this.allEmployee = res.data.length;
      }
    )
  }
  getAllFaculty() {
    this._crud.getFaculty().subscribe(
      (res: any) => {
        this.faculty = res.data.length;
      }
    )
  }
  getVehicle() {
    this._crud.getTransportVehicle().subscribe(
      (res: any) => {
        this.allVehicle = res.data.length
      }
    )
  }

  chartOptions = {
    animationEnabled: true,
    data: [{
      type: "doughnut",
      yValueFormatString: "#,###.##'%'",
      indexLabel: "{name}",
      dataPoints: [
        { y: 50, name: "Boys" },
        { y: 50, name: "Girls" },
      ]
    }]
  }

  chart: any;

  chartOptionss = {
    animationEnabled: true,
    data: [{
      type: "column",
      indexLabel: "{y}",
      yValueFormatString: "#,###",
      dataPoints: [
        { label: "Playgroup", y: 10 },
        { label: "Nursery", y: 20 },
        { label: "LKG", y: 24 },
        { label: "UKG", y: 29 },
        { label: "Class 1", y: 30 },
        { label: "Class 2", y: 58 },
        { label: "Class 3", y: 45 },
        { label: "Class 4", y: 15 },
        { label: "Class 5", y: 20 },
        { label: "Class 6", y: 25 },
        { label: "Class 7", y: 56 },
        { label: "Class 8", y: 45 },
        { label: "Class 9", y: 40 },
        { label: "Class 10", y: 58 },
        { label: "Class 11", y: 25 },
        { label: "Class 12", y: 33 }
      ]
    }]

  }
}
