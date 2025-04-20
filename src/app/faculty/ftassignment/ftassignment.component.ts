import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Assignment, AssignmentResponse } from 'src/app/interface/assignment.interface';
import { CrudService } from 'src/app/Services/crud.service';
import { AssignmentFormComponent } from '../assignment-form/assignment-form.component';
import { ConfirmBoxComponent } from 'src/app/admin/confirm-box/confirm-box.component';

@Component({
  selector: 'app-ftassignment',
  templateUrl: './ftassignment.component.html',
  styleUrls: ['./ftassignment.component.scss']
})
export class FtassignmentComponent implements OnInit {
  assignmentsList: Assignment[] = []
  faculty: any
  facultyData: any

  constructor(
    private _crud: CrudService,
    private dialog: MatDialog
  ) { 
    this.faculty = localStorage.getItem('facultyLoginData')
    this.facultyData = JSON.parse(this.faculty)
  }

  ngOnInit() {
    this.getAssignment()
  }

  getAssignment() {
    this._crud.getAssignment(this.facultyData.id).subscribe(
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
    const openDig = this.dialog.open(AssignmentFormComponent, {
      disableClose: true
    })
    openDig.afterClosed().subscribe(() =>  this.getAssignment())
  }

  deleteAssignment(assignmentId: any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true
    })
    openDig.afterClosed().subscribe(
      (res) => {
        if (res == 1) {
          this._crud.deleteAssignment(assignmentId).subscribe(
            (res) => {
              if (res.success == 1) {
                this.getAssignment()
              }
            }
          )
        }
      }
    )

  }

}
