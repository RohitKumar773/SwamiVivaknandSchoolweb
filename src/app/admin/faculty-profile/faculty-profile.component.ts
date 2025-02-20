import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFacultyComponent } from '../add-faculty/add-faculty.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Faculty, facultyResponse } from 'src/app/interface/faculty.interface';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.scss'],
})
export class FacultyProfileComponent implements OnInit {
  facultyList: Faculty[] = [];

  constructor(private dialog: MatDialog, private _crud: CrudService) { }

  ngOnInit(): void {
    this.getFaculty();
  }

  add_new_faculty() {
    const dig = this.dialog.open(AddFacultyComponent, {
      disableClose: true,
    });
    dig.afterClosed().subscribe((res) => {
      this.getFaculty();
    });
  }

  delete_profile(id: any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe((res) => {
      console.log(res);
      if (res == 1) {
        this._crud.deleteFaculty(id).subscribe((res) => {
          if (res.success == 1) {
            this.getFaculty();
          }
        });
      }
    });
  }

  getFaculty() {
    this._crud.getFaculty().subscribe((res: facultyResponse) => {
      if (Array.isArray(res.data)) {
        this.facultyList = res.data;
  delete_profile() { }

  getFaculty() {
    this._crud.getAllFaculty().subscribe((res: facultyResponse) => {
      if (Array.isArray(res.data)) {
        this.facultyList = res.data
      }
    });
  }
}
