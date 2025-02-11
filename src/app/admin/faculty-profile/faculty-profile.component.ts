import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFacultyComponent } from '../add-faculty/add-faculty.component';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.scss']
})
export class FacultyProfileComponent {


  constructor(
    private dialog:MatDialog
  ){}

  add_new_faculty(){
    this.dialog.open(AddFacultyComponent,{
      disableClose:true
    })
  
  }
  delete_profile(){}

}
