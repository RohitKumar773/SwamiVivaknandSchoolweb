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
  getVehicle(){
    this._crud.getTransportVehicle().subscribe(
      (res: any) => {
        this.allVehicle = res.data.length
      }
    )
  }

}
