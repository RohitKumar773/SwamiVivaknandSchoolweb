import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-update-std-password',
  templateUrl: './update-std-password.component.html',
  styleUrls: ['./update-std-password.component.scss']
})
export class UpdateStdPasswordComponent {

  passwordForm: FormGroup;
  student: any
  studentData: any

  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.student = localStorage.getItem('studentLoginData')
    this.studentData = JSON.parse(this.student)
    this.passwordForm = this.fb.group(
      {
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  passwordsMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      const data = {
        id: this.studentData?.id,
        password: this.passwordForm.get('confirmPassword')?.value
      }
      this._crud.stdChangePassword(data).subscribe(
        (res: any) => {
          this.toastr.success('Your password updated successfully', 'Success')
          this.router.navigate(['/student']);
          localStorage.removeItem('studentLoginData');
        }
      )
    }
  }
}
