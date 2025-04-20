import { Component, OnInit } from '@angular/core';
import { Assignment, AssignmentResponse } from 'src/app/interface/assignment.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit{
  assignmentList: Assignment[] = []
faculty: any
facultyData: any
  constructor(
    private _crud: CrudService
  ) { 
    
  }

  ngOnInit() {
    this.getAssignment()
  }

  getAssignment(){
    this._crud.getAssignment(this.facultyData.id).subscribe(
      (res: AssignmentResponse) => {
        console.log(res);
        this.assignmentList = res.data
      }
    )
  }


}
