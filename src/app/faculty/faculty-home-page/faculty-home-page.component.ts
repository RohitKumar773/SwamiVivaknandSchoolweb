import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-home-page',
  templateUrl: './faculty-home-page.component.html',
  styleUrls: ['./faculty-home-page.component.scss']
})
export class FacultyHomePageComponent {
  facultyLogin: any
  facultyLoginData: any
  img_url: string = 'http://localhost/sawamivivekanand/';
  sidenavMode: 'side' | 'over' = 'side'

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _router:Router
  ) {
    this.facultyLogin = localStorage.getItem('facultyLoginData');
    this.facultyLoginData = JSON.parse(this.facultyLogin);


    this.breakpointObserver.observe([`(max-width: 500px)`])
    .subscribe(result => {
      this.sidenavMode = result.matches ? 'over' : 'side';
    });
  }

  logout(){
    this._router.navigate(['/website'])
    localStorage.removeItem('facultyLoginData')
  }

}
