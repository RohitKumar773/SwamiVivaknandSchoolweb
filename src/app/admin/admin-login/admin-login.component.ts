import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
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
      alert('Please fill all the fields')
    }
    else {
      // const adminLogin = new FormData();
      // adminLogin.append('email', this.email);
      // adminLogin.append('password', this.password);
      const adminLogin = {
        email: this.email,
        password: this.password
      }
      console.log(adminLogin)
      this._crud.adminLogin(adminLogin).subscribe(
        (res: any) => {
          console.log(res);
          if (res.success == true) {
            alert('Login Successfully')
            localStorage.setItem("adminLoginData", JSON.stringify(res.data))
            this.router.navigate(['/admin/home'])
          } else {
            alert('login failded')
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
