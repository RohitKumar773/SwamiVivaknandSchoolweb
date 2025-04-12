import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.scss']
})
export class FacultyLoginComponent {
  email: string = "";
  password: string = "";

  constructor(
    private _crud: CrudService,
    private router: Router,
    private toastr: ToastrService
  ) {
    const data = localStorage.getItem('facultyLoginData')
    if (data) {
      const teacherLogin = JSON.parse(data)
      console.log(teacherLogin);
      if (teacherLogin.email) {
        this.router.navigate(['/faculty/faculty_homepage'])
      }

    }
  }

  facultyLogin() {
    if (this.email == '' || this.password == '') {
      this.toastr.warning('Please fill all required fields', 'Warning');
    }
    else {
      const facultiesLogin = {
        email: this.email,
        password: this.password
      }
      console.log(facultiesLogin);
      this._crud.facultyLogin(facultiesLogin).subscribe((res: any) => {
        console.log(res);
        if (res.success == true) {
          localStorage.setItem("facultyLoginData", JSON.stringify(res.data))
          this.router.navigate(['/faculty/faculty_homepage'])
          this.toastr.success('Welcome to SVSN', 'Login Successfull!')
        }
        else {
          this.toastr.error('Please Enter Valid Email or Password', 'Invalid')
        }

      },
        (err: Error) => {
          console.log(err);
          this.toastr.error('Please check your internet connection', 'Internet Error')
        }
      )

    }
  }

}
