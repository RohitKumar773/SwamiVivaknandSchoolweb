import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent {
  passwordForm: FormGroup;
  faculty: any
  facultyData: any

  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.faculty = localStorage.getItem('facultyLoginData')
    this.facultyData = JSON.parse(this.faculty)
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
        id: this.facultyData?.id,
        password: this.passwordForm.get('confirmPassword')?.value
      }
      this._crud.changePassword(data).subscribe(
        (res: any) => {
          console.log(res);
          if (res === true) {
            this.toastr.success('Your password updated successfully', 'Success')
            this.router.navigate(['/faculty_homepage'])
          }
        }
      )
    }
  }
}
