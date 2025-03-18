import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddexamComponent } from '../addexam/addexam.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Examinations, ExaminationResponse } from 'src/app/interface/examinations.interface';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-data-examinations',
  templateUrl: './master-data-examinations.component.html',
  styleUrls: ['./master-data-examinations.component.scss']
})
export class MasterDataExaminationsComponent implements OnInit {
  examList: Examinations[] = [];

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getExam()
  }

  getExam() {
    this._crud.getExamination().subscribe(
      (res: ExaminationResponse) => {
        if (Array.isArray(res.data)) {
          this.examList = res.data
        }
      },
      (err: Error) => {
        console.log(err);
      }
    )
  }

  delete_exam(id: any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true
    })

    openDig.afterClosed().subscribe(
      (res: any) => {
        console.log(res);
        if (res == 1) {
          this._crud.deleteExam(id).subscribe(
            (res: any) => {
              console.log(res);
              if (res.success == 1) {
                this.toastr.success('Exam deleted successfully', 'Success');
                this.getExam()
              }
            }
          )
        }
      }
    )
  }


  add_new_exam() {
    const openDig = this.dialog.open(AddexamComponent, {
      disableClose: true
    })

    openDig.afterClosed().subscribe(
      () => {
        this.getExam();
      }
    )

  }

}
