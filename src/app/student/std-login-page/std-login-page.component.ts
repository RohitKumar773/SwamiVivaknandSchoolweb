import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-std-login-page',
  templateUrl: './std-login-page.component.html',
  styleUrls: ['./std-login-page.component.scss']
})
export class StdLoginPageComponent {
  email: string = ''
  password: string = ''

  constructor(
    private _crud: CrudService,
    private router: Router,
    private toastr:ToastrService
  ) { }

  studentLogin() {
    if (this.email == "" || this.password == "") {
      this.toastr.warning('Please fill all required fields')
    }
    else {
      const studentLogins = {
        email: this.email,
        password: this.password
      }
      console.log(studentLogins);

      this._crud.studentLogin(studentLogins).subscribe((res: any) => {
        console.log(res);
        if (res.success == true) {
          this.toastr.success('Login Successfully')
          localStorage.setItem("studentLoginData", JSON.stringify(res.data))
          this.router.navigate(['/student/std_homepage'])
        }
        else {
          this.toastr.error('Please Enter Valid Email or Password', 'Invalid')
        }

      },
        (err: any) => {
          console.log(err);
          this.toastr.error('Please check your internet connection', 'Internet Error')
        }
      )
    }
  }
}
