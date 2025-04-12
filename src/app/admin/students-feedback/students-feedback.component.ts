import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Feedback, FeedbackApiResponse } from 'src/app/interface/feedback.interface';
import { CrudService } from 'src/app/Services/crud.service';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students-feedback',
  templateUrl: './students-feedback.component.html',
  styleUrls: ['./students-feedback.component.scss']
})
export class StudentsFeedbackComponent implements OnInit {
  feedbackList: Feedback[] = []

  constructor(
    private _crud: CrudService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getFeedback()
  }

  getFeedback() {
    this._crud.getFeedback().subscribe(
      (res: FeedbackApiResponse) => {
        console.log(res);
        this.feedbackList = res.data
      }
    )
  }


  delete_application(data: any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true
    })
    openDig.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res == 1) {
          this._crud.deleteFeedback().subscribe(
            (res) => {
              console.log(res);
              if (res.success == 1) {
                this.getFeedback();
                this.toastr.success('Student feedback deleted successfull', 'Success')
              }
            }
          )
        }
      }
    )

  }

}
