import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmBoxComponent } from 'src/app/admin/confirm-box/confirm-box.component';
import { ExaminationGroup, ExaminationResponse } from 'src/app/interface/examinations.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-exam-tests',
  templateUrl: './exam-tests.component.html',
  styleUrls: ['./exam-tests.component.scss']
})
export class ExamTestsComponent implements OnInit {
  examList: ExaminationGroup[] = [];

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
}
