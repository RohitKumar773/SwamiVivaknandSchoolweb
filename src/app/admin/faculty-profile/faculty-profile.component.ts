import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFacultyComponent } from '../add-faculty/add-faculty.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Faculty, facultyResponse } from 'src/app/interface/faculty.interface';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { FacultyViewComponent } from '../faculty-view/faculty-view.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.scss'],
})
export class FacultyProfileComponent implements OnInit {
  facultyList: Faculty[] = [];
  filterFaculty: Faculty[] = []

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
    private toastr: ToastrService
  ) { }

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

  getFaculty() {
    this._crud.getFaculty().subscribe((res: facultyResponse) => {
      if (Array.isArray(res.data)) {
        this.facultyList = res.data;
        this.filterFaculty = res.data
      }
    });
  }

  onSearch(event: any) {
    const filter = event.target.value?.toLowerCase() || '';
    this.filterFaculty = this.facultyList.filter(data =>
      data?.name?.toLowerCase().includes(filter) ||
      data?.contact_no?.toString().includes(filter)
    )
  }


  updateFaculty(data: any) {
    const openDig = this.dialog.open(AddFacultyComponent, {
      disableClose: true,
      data: data,
    });

    openDig.afterClosed().subscribe(() => {
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
            this.toastr.success('Faculty Deleted Successfully', 'Success')
          }
        });
      }
    });
  }


  viewFaculty(ft: any) {
    this.dialog.open(FacultyViewComponent, {
      disableClose: true,
      data: ft,
    })
  }
}
