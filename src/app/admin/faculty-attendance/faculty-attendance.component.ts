import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-faculty-attendance',
  templateUrl: './faculty-attendance.component.html',
  styleUrls: ['./faculty-attendance.component.scss']
})
export class FacultyAttendanceComponent {
  count_student: number = 0;
  inst_id: any
  rowdata = 0
  login_deatils: any
  login: any
  batch_name: any
  routdata: any
  Attendents: [] = []

  imgUrl: string = '';
  constructor(
    private _crud: CrudService,
    private router: Router
  ) {
    const institute_data = this.router.getCurrentNavigation();
    this.routdata = institute_data?.extras

    this.login_deatils = localStorage.getItem('Token')
    this.login = JSON.parse(this.login_deatils)

  }

  ngOnInit(): void {
    const instformdata = new FormData()
    instformdata.append('inst_id', this.login.inst_id)
    instformdata.append('batch_id', this.routdata.batch_id)
    this.getAttendent()
  }

  getAttendent() {
    this._crud.getattendance().subscribe(
      (res: any) => {
        console.log(res);
        console.log(res);
      }
    )
  }

  AttendentMark(event: any, row: any): void {
    const selectedValue = event.value;
    console.log(row);

    console.log(selectedValue);
    const data = {
      std_id_fk: `${Number(row.std_id_fk)}`,
      course_id_fk: `${Number(row.course_id_fk)}`,
      "batch_id_fk": `${Number(row.batch_id_fk)}`,
      "cur_date": "",
      "status": selectedValue
    }


    this._crud.addattendance(data).subscribe(
      (res: any) => {
        console.log(res);

      }
    )
  }




}
