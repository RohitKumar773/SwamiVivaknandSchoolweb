import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Student, StudentResponse } from 'src/app/interface/student.interface';

@Component({
  selector: 'app-course-applcation',
  templateUrl: './course-applcation.component.html',
  styleUrls: ['./course-applcation.component.scss'],
})
export class CourseApplcationComponent implements OnInit{
  studentList: Student[] = [];

  constructor(private dialog: MatDialog, private _crud: CrudService) {}

  ngOnInit(){
    this.getAllStudent();
  }

  getAllStudent() {
    this._crud.getAllStudent().subscribe((res: StudentResponse) => {
      console.log(res.data);

      if(Array.isArray(res.data)){
        this.studentList = res.data
      }
    });
  }

  delete_application() {
    this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });
  }
}
