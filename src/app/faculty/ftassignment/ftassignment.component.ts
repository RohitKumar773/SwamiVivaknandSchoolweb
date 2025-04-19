import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Assignment, AssignmentResponse } from 'src/app/interface/assignment.interface';
import { CrudService } from 'src/app/Services/crud.service';
import { AssignmentFormComponent } from '../assignment-form/assignment-form.component';

@Component({
  selector: 'app-ftassignment',
  templateUrl: './ftassignment.component.html',
  styleUrls: ['./ftassignment.component.scss']
})
export class FtassignmentComponent implements OnInit {
  assignmentsList: Assignment[] = []

  constructor(
    private _crud: CrudService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this._crud.getAssignment().subscribe(
      (res: AssignmentResponse) => {
        console.log(res);
        this.assignmentsList = res.data
      },
      (err: Error) => {
        console.log(err);

      }
    )
  }

  addAssignment() {
    this.dialog.open(AssignmentFormComponent, {
      disableClose: true
    })
  }

}
