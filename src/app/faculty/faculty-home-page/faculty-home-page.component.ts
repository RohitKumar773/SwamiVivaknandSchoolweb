import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty-home-page',
  templateUrl: './faculty-home-page.component.html',
  styleUrls: ['./faculty-home-page.component.scss']
})
export class FacultyHomePageComponent {
  facultyLogin: any
  facultyLoginData: any
  img_url: string = 'http://localhost/sawamivivekanand/'

  constructor() {
    this.facultyLogin = localStorage.getItem('facultyLoginData');
    this.facultyLoginData = JSON.parse(this.facultyLogin)
  }

}
