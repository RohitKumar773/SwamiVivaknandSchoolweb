import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  studentLogin() {
    if (this.email == "" || this.password == "") {
      alert('Please Fill all the required fields')
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
          alert("Login Successfully");
          localStorage.setItem("studentLoginData", JSON.stringify(res.data))
          this.router.navigate(['/student/std_homepage'])
        }
        else {
          alert('Login Failed')
        }

      },
        (err: any) => {
          console.log(err);
          alert('Login failed')
        }
      )
    }
  }
}
