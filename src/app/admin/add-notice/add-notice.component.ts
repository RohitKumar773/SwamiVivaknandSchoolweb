import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NoticeResponse } from 'src/app/interface/notice.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.scss']
})
export class AddNoticeComponent {
  noticeForm!: FormGroup
  admin = 1;

  constructor(
    private _fb: FormBuilder,
    private _crud: CrudService,
    private _toast: ToastrService,
    private matref: MatDialogRef<AddNoticeComponent>
  ) {
    this.noticeForm = this._fb.group({
      notice: ['', Validators.required],
      notice_date: ['', Validators.required],
      admin_id_fk: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.noticeForm.valid) {
      this._crud.addNotice(this.noticeForm.value).subscribe(
        (res: NoticeResponse) => {
          if (res.success) {
            console.log(res);
            this.matref.close()
            this._toast.success('Notice added successfully', 'Success');
          } else {
            this._toast.error('Please Check your internet connection', 'Network');
          }
        },
        (err: Error) => {
          console.log(err);
          this._toast.error('Please Check your internet connection', 'Network');
        }
      )
    } else {
      this._toast.warning('Please fill all required fields', 'Warning')
    }
  }

  resetForm() {
    this.noticeForm.reset()
  }
}
