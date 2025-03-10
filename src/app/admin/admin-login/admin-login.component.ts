import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  email: string = ''
  password: string = ''


  constructor(
    private _crud: CrudService,
    private router: Router,
    private toastr:ToastrService
  ) {
    const data = localStorage.getItem('adminLoginData')
    if (data) {
      const loginUser = JSON.parse(data)
      console.log(loginUser)
      if (loginUser.email) {
        this.router.navigate(['/admin/home'])
      }
    }
  }

  adminlogin() {
    if (this.email == "" || this.password == "") {
      this.toastr.warning('Email and Password are required.', 'Required Fields')
    }
    else {
      const adminLogin = {
        email: this.email,
        password: this.password
      }
      console.log(adminLogin)
      this._crud.adminLogin(adminLogin).subscribe(
        (res: any) => {
          console.log(res);
          if (res.success == true) {
            localStorage.setItem("adminLoginData", JSON.stringify(res.data))
            this.router.navigate(['/admin/home'])
            this.toastr.success('Welcome to SVSN', 'Login Successfully');
          } else {
            this.toastr.error('Enter valid email or password', 'Login Failed !')
          }

        },
        (err: any) => {
          console.log(err);
          alert('Login failed')

        }
      )
    }

    console.log(this.email);
    console.log(this.password);
  }



}
