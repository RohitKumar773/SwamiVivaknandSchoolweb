import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Student, StudentResponse } from 'src/app/interface/student.interface';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss'],
})
export class AdmissionsComponent implements OnInit {
  studentList: Student[] = [];

  constructor(private dialog: MatDialog, private _crud: CrudService) {}

  ngOnInit() {
    this.getAllStudent();
  }

  add_new_std() {
    this.dialog.open(RegistrationFormComponent, {
      disableClose: true,
    });
  }

  delete_application() {
    this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });
  }

  getAllStudent() {
    this._crud.getAllStudent().subscribe((res: StudentResponse) => {
      // console.log(res.data);
      if (Array.isArray(res.data)) {
        this.studentList = res.data;
      }
    });
  }
}
