import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Student, StudentResponse } from 'src/app/interface/student.interface';
import { studentApplication, studentApplicationRes } from 'src/app/interface/newStdApp.interface';

@Component({
  selector: 'app-course-applcation',
  templateUrl: './course-applcation.component.html',
  styleUrls: ['./course-applcation.component.scss'],
})
export class CourseApplcationComponent implements OnInit {
  applicationList: studentApplication[] = [];
  filterApplication: studentApplication[] = [];

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService
  ) { }

  ngOnInit() {
    this.getAllApplcation();
  }

  getAllApplcation() {
    this._crud.getStdApplications().subscribe((res: studentApplicationRes) => {
      console.log(res.data);

      if (Array.isArray(res.data)) {
        this.applicationList = res.data;
        this.filterApplication = res.data
      }
    });
  }

  onSearch(event: any) {
    const filter = event.target.value?.toLowerCase() || '';
    this.filterApplication = this.applicationList.filter(data =>
      data?.name?.toLowerCase().includes(filter) ||
      data?.mobile?.toString().includes(filter) ||
      data?.email?.toLowerCase().includes(filter) ||
      data?.father_name?.toLowerCase().includes(filter)
    )
  }

  delete_application(id: any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe((res) => {
      console.log(res);

      if (res == 1) {
        this._crud.deleteApplication(id).subscribe((res) => {
          console.log(res);
          if (res.success == 1) {
            this.getAllApplcation()
          }

        })
      }
      else {
        alert('Data not Deleted')
      }

    })
  }
}
