import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-std-homepage',
  templateUrl: './std-homepage.component.html',
  styleUrls: ['./std-homepage.component.scss']
})
export class StdHomepageComponent {
  stdLogin: any
  stdLoginData: any
  imgUrl: string = 'http://localhost/sawamivivekanand/'
  sidenavMode: 'side' | 'over' = 'side'

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _router: Router
  ) {
    this.stdLogin = localStorage.getItem('studentLoginData')
    this.stdLoginData = JSON.parse(this.stdLogin);


    this.breakpointObserver.observe([`(max-width: 500px)`])
      .subscribe(result => {
        this.sidenavMode = result.matches ? 'over' : 'side';
      });

  }

  logout() {
    localStorage.removeItem('studentLoginData')
    this._router.navigate(['/website'])
  }

}
