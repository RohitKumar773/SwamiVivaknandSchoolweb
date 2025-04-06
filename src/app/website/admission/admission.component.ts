import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { studentApplicationRes } from 'src/app/interface/newStdApp.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent {
  admin = 1;
  studentRegistrationForm!: FormGroup;

  constructor(
    private _rg: FormBuilder, 
    private _crud: CrudService,
    private toastr: ToastrService,
  ) {
    this.studentRegistrationForm = this._rg.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      father_name: ['', Validators.required],
      mother_name: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      admin_id_fk:['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.studentRegistrationForm.value);

    if (this.studentRegistrationForm.valid) {
      this._crud.std_self_reg(this.studentRegistrationForm.value).subscribe(
        (result: studentApplicationRes) => {
          console.log(result);
          if (result.success == 1) {
            this.toastr.success('Registration Successfull', 'Success');
            this.studentRegistrationForm.reset();

          } else {
            this.toastr.error('Please Check your internet', 'Error')
          }
        },
        (err: Error) => {
          console.log(err);
          this.toastr.error('Please Check your internet', 'Error')
        }
      );
    } else {
      this.toastr.warning('Please fill all required fields')
    }
  }

  reset(){
    this.studentRegistrationForm.reset()
  }

}
