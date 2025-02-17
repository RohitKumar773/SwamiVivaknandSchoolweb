import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Student, StudentResponse } from 'src/app/interface/student.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.scss'],
})
export class RegistrationViewComponent implements OnInit {
  studentList: Student[] = [];

  constructor(
    private dialog: MatDialogRef<RegistrationViewComponent>,
    private _crud: CrudService
  ) {}

  ngOnInit() {
    this.viewStudent();
  }

  viewStudent() {
    this._crud.getAllStudent().subscribe((res: StudentResponse) => {
      console.log(res.data);
      if (Array.isArray(res.data)) {
        this.studentList = res.data;
      }
    });
  }
}
