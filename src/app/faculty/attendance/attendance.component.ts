import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Attendent, AttendentRes } from 'src/app/interface/attendance.interface';
import { Faculty, facultyResponse } from 'src/app/interface/faculty.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
  selectedFaculty: any | null = null;
  selectedMonth: number = new Date().getMonth() + 1; // current month (1-12)
  selectedYear: number = new Date().getFullYear();   // current year
  YearList = [2025, 2026, 2027, 2028, 2029, 2030]; // or generate dynamically

  Attendents: Attendent[] = []
  imgUrl: string = '';
  Faculty_list: Faculty[] = []
  emp_id: any = ''
  month: any = this.selectedMonth
  year: any = this.YearList
  faculty: any
  facultyData: any

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
  ) {
    this.faculty = localStorage.getItem('facultyLoginData')
    this.facultyData = JSON.parse(this.faculty)
   }

  ngOnInit(): void {
    // this.getFaculty_list()
    this.loadAttendance()
  }


  // getFaculty_list() {
  //   this._crud.getFaculty().subscribe(
  //     (res: facultyResponse) => {
  //       if (Array.isArray(res.data)) {
  //         this.Faculty_list = res.data
  //       }
  //     }
  //   )
  // }

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
    if (!this.facultyData?.id) {
      console.warn('Faculty ID is missing');
      return;
    }
  
    console.log('Fetching data for:', {
      facultyId: this.facultyData.id,
      month: this.selectedMonth,
      year: this.selectedYear
    });
  
    this._crud.getAttendanceReport(this.facultyData.id, this.selectedMonth, this.selectedYear).subscribe({
      next: (res) => {
        if (res.success && Array.isArray(res.data)) {
          this.Attendents = res.data;
        } else {
          this.Attendents = [];
          console.log('No records found.');
        }
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }
  
}
