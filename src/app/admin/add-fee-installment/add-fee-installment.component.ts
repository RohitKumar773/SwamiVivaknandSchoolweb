import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StudentFeeInstallmentRes } from 'src/app/interface/feeInstallment.interface';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-add-fee-installment',
  templateUrl: './add-fee-installment.component.html',
  styleUrls: ['./add-fee-installment.component.scss']
})
export class AddFeeInstallmentComponent {
  classes: any[] = [];
  installmentForm!: FormGroup
  admin = 1;

  constructor(
    private _shared: SharedService,
    private _fb: FormBuilder,
    private _crud: CrudService,
    private toastr: ToastrService,
    private matref: MatDialogRef<AddFeeInstallmentComponent>
  ) {

    this._shared.classList.subscribe(
      (cls) => {
        this.classes = cls;
      }
    );


    this.installmentForm = this._fb.group({
      id: [''],
      class: ['', Validators.required],
      total_fees: ['', Validators.required],
      first_instalment: ['', Validators.required],
      second_installment: ['', Validators.required],
      admin_id_fk: ['', Validators.required]
    });

    this.installmentForm.get('total_fees')?.valueChanges.subscribe((value) => {
      this.calculateInstallments(value)
    })
  }

  calculateInstallments(totalFees: number) {
    if (!totalFees || totalFees <= 0) {
      this.installmentForm.patchValue({
        first_instalment: '',
        second_installment: ''
      });
      return;
    }

    const firstInstallment = Math.round(totalFees * 0.6);
    const secondInstallment = totalFees - firstInstallment;

    this.installmentForm.patchValue({
      first_instalment: firstInstallment,
      second_installment: secondInstallment
    });
  }




  onSubmit() {
    if (this.installmentForm.valid) {
      this._crud.addInstallment(this.installmentForm.value).subscribe(
        (res: StudentFeeInstallmentRes) => {
          console.log(res);
          if (res.success == 1) {
            this.toastr.success('Installment Added Successfully', 'Success');
            this.matref.close()
          } else {
            this.toastr.error('Please check your internet connection', 'Error')
          }
        },
        (err: Error) => {
          console.log(err);
          this.toastr.error('Please check your internet connection', 'Error')
        }
      )
    }
    else {
      this.toastr.warning('Please fill all required fields','Warning')
    }
  }

  resetForm() {
    this.installmentForm.reset()
  }
}
