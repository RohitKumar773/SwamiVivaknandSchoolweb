import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AddmastersubjectComponent } from '../addmastersubject/addmastersubject.component';
import { CrudService } from 'src/app/Services/crud.service';
import { GroupedClass, SubjectRes } from 'src/app/interface/subject.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-data-subject',
  templateUrl: './master-data-subject.component.html',
  styleUrls: ['./master-data-subject.component.scss'],
})
export class MasterDataSubjectComponent implements OnInit {

  subjectList: GroupedClass[] = [];

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getSubject()
  }

  delete_subject(id: any) {
    console.log(id);
    const openDel = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true
    });

    openDel.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res == 1) {
          this._crud.deleteSubject(id).subscribe(
            (res) => {
              if (res.success == 1) {
                this.toastr.success('Subject deleted successfully', 'Success');
                this.getSubject()
              }
            }
          )
        }
      }
    )
  }

  add_new_subject() {
    const openDig = this.dialog.open(AddmastersubjectComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(() => {
      this.getSubject();
    })
  }

  getSubject() {
    this._crud.getSubject().subscribe((res: SubjectRes) => {
      console.log(res);
      if (Array.isArray(res.data)) {
        this.subjectList = res.data
      }
    })
  }
}
