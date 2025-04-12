import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
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
    console.log('clicked');
    
    if (this.email == '' || this.password == '') {
      alert('Please fill the required fields');
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
          alert('Login Successfully')
        }
        else {
          alert("Login Failed")
        }

      },
        (err: Error) => {
          console.log(err);
          alert("Login Failed")

        }
      )

    }
  }

}
