import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Attendent, TodayAttendent, TodayAttendentRes } from 'src/app/interface/attendance.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-faculty-attendance',
  templateUrl: './faculty-attendance.component.html',
  styleUrls: ['./faculty-attendance.component.scss']
})
export class FacultyAttendanceComponent {
  Attendents: TodayAttendent[] = []
  imgUrl: string = '';
  constructor(
    private _crud: CrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAttendent()
  }

  getAttendent() {
    this._crud.getTodayAttendance().subscribe(
      (res: TodayAttendentRes) => {
        if (Array.isArray(res.data)) {
          console.log(res);
          this.Attendents = res.data
        }
      }
    )
  }

  AttendentMark(event: any, row: TodayAttendent): void {
    const selectedValue = event.value;
    console.log(row);

    console.log(selectedValue);
    const data = {
      "emp_id": row.id,
      "emp_name": row.name,
      "mobile": row.contact_no,
      "status": selectedValue
    }

    console.log(data);

    this._crud.addattendance(data).subscribe(
      (res: any) => {
        console.log(res);

      }
    )
  }




}
