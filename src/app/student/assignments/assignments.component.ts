import { Component, OnInit } from '@angular/core';
import { Assignment, AssignmentResponse } from 'src/app/interface/assignment.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  assignmentList: Assignment[] = []
  student: any
  studentData: any
  constructor(
    private _crud: CrudService
  ) {
    this.student = localStorage.getItem('studentLoginData')
    this.studentData = JSON.parse(this.student)
  }

  ngOnInit() {
    this.getAssignment()
  }

  getAssignment() {
    this._crud.getStdAssignment(this.studentData?.class).subscribe(
      (res: AssignmentResponse) => {
        console.log(res);
        this.assignmentList = res.data
      }
    )
  }


}
