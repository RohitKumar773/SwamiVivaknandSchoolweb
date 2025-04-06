import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Attendent, AttendentRes } from 'src/app/interface/attendance.interface';
import { Faculty, facultyResponse } from 'src/app/interface/faculty.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-faculty-attendance-report',
  templateUrl: './faculty-attendance-report.component.html',
  styleUrls: ['./faculty-attendance-report.component.scss']
})
export class FacultyAttendanceReportComponent {
  selectedFaculty: any | null = null;
  selectedMonth: number = new Date().getMonth() + 1; // current month (1-12)
  selectedYear: number = new Date().getFullYear();   // current year
  YearList = [2025, 2026, 2027, 2028]; // or generate dynamically

  Attendents: Attendent[] = []
  imgUrl: string = '';
  Faculty_list: Faculty[] = []
  emp_id: any = ''
  month: any = this.selectedMonth
  year: any = this.YearList
  MonthList = [
    { id: 1, name: 'January' },
    { id: 2, name: 'February' },
    { id: 3, name: 'March' },
    { id: 4, name: 'April' },
    { id: 5, name: 'May' },
    { id: 6, name: 'June' },
    { id: 7, name: 'July' },
    { id: 8, name: 'August' },
    { id: 9, name: 'September' },
    { id: 10, name: 'October' },
    { id: 11, name: 'November' },
    { id: 12, name: 'December' },
  ];

  constructor(
    private _crud: CrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFaculty_list()
    this.loadAttendance()
  }


  getFaculty_list() {
    this._crud.getFaculty().subscribe(
      (res: facultyResponse) => {
        if (Array.isArray(res.data)) {
          this.Faculty_list = res.data
        }
      }
    )
  }

  onFacultyChange(facultyId: number) {
    console.log('Selected Faculty ID:', facultyId);
    this.selectedFaculty = facultyId
    this.loadAttendance()
  }
  onYearChange(year: number) {
    console.log('Selected Faculty ID:', year);
    this.selectedYear = year
    this.loadAttendance()

  }
  onMonthChange(month: number) {
    console.log('Selected Faculty ID:', month);
    this.selectedMonth = month
    this.loadAttendance()

  }



  loadAttendance() {
    this._crud.getAttendanceReport(this.selectedFaculty, this.selectedMonth, this.selectedYear).subscribe({
      next: (res) => {
        if (res.success) {
          if (Array.isArray(res.data)) {
            this.Attendents = res.data;
          }
        } else {
          console.log('No records found.');
        }
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }


}
