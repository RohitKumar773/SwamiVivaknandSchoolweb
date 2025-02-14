import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFacultyComponent } from '../add-faculty/add-faculty.component';
import { CrudService } from 'src/app/Services/crud.service';
import { faculty, facultyResponse } from 'src/app/interface/faculty.interface';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.scss'],
})
export class FacultyProfileComponent implements OnInit {

  facultyList: faculty[] = [];

  constructor(private dialog: MatDialog, private _crud: CrudService) {}

  ngOnInit(): void {
    this.getFaculty();
  }

  add_new_faculty() {
    this.dialog.open(AddFacultyComponent, {
      disableClose: true,
    });
  }
  delete_profile() {}

  getFaculty() {
    this._crud.getAllFaculty().subscribe((res: facultyResponse) => {
      if(Array.isArray(res.data)){
        this.facultyList = res.data
      }
    });
  }
}
