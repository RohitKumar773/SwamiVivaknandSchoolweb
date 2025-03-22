import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StudentFeeRes } from 'src/app/interface/studentFees.interface';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-add-std-fee',
  templateUrl: './add-std-fee.component.html',
  styleUrls: ['./add-std-fee.component.scss']
})
export class AddStdFeeComponent implements OnInit {
  studentFeeForm!: FormGroup
  class: any[] = [];
  admin = 1;

  constructor(
    private _shared: SharedService,
    private _crud: CrudService,
    private _fb: FormBuilder,
    private _toastr: ToastrService,
    private matref: MatDialogRef<AddStdFeeComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_data: any
  ) {
    this._shared.classList.subscribe(
      (cls) => {
        this.class = cls
      }
    );


    this.studentFeeForm = this._fb.group({
      id: [''],
      std_name: ['', Validators.required],
      class: ['', Validators.required],
      std_roll: ['', Validators.required],
      fee_date: ['', Validators.required],
      amount: ['', Validators.required],
      contact: ['', Validators.required],
      admin_id_fk: ['', Validators.required]
    })
  }

  ngOnInit() {
    console.log(this.edit_data);
    if (this.edit_data) {
      this.studentFeeForm.patchValue(this.edit_data)
    }
    else{}
  }

  onSubmit() {
    if (this.studentFeeForm.valid) {
      this._crud.addStdFee(this.studentFeeForm.value).subscribe(
        (res: StudentFeeRes) => {
          console.log(res);
          this._toastr.success('Fee added successfully', 'Success');
          this.matref.close();
        },
        (err: Error) => {
          console.log(err);
          this._toastr.warning('Please check your internet', 'Error')
        }
      )
    }
    else {
      this._toastr.warning('Please fill all required fields')
    }
  }

  onUpdate() {
    if (this.studentFeeForm.valid) {
      this._crud.addStdFee(this.studentFeeForm.value).subscribe(
        (res: StudentFeeRes) => {
          console.log(res);
          this._toastr.success('Fee Updated Successfully', 'Success');
          this.matref.close();
        },
        (err: Error) => {
          console.log(err);
          this._toastr.warning('Please check your internet', 'Error')
        }
      )
    }
    else {
      this._toastr.warning('Please fill all required fields')
    }
  }

  resetForm() {
    this.studentFeeForm.reset()
  }
}
