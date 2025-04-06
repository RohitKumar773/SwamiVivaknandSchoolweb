import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfiledialogComponent } from '../profiledialog/profiledialog.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss'],
  animations: [
    trigger('rotateIcon', [
      state('open', style({ transform: 'rotate(-90deg)' })),
      state('closed', style({ transform: 'rotate(0deg)' })),
      transition('open <=> closed', [animate('0.3s')]),
    ]),
  ],
})
export class AdminHomePageComponent implements OnInit {
  activeButton: number | null = null;
  isOpen = false;
  isOpen2 = false;
  isOpen3 = false;
  isOpen4 = false;
  isOpen5 = false;
  isOpen6 = false;
  isOpen7 = false;
  isOpen8 = false;
  isOpen9 = false;

  login: any
  loginData: any

  toggle() {
    this.isOpen = !this.isOpen;
    this.closeOtherSections(2);
  }

  regToggle() {
    this.isOpen2 = !this.isOpen2;
    this.closeOtherSections(3);
  }

  mdtoggle() {
    this.isOpen3 = !this.isOpen3;
    this.closeOtherSections(5);
  }

  fttoggle() {
    this.isOpen4 = !this.isOpen4;
    this.closeOtherSections(6);
  }

  festoggle() {
    this.isOpen5 = !this.isOpen5;
    this.closeOtherSections(7);
  }

  cstoggle() {
    this.isOpen6 = !this.isOpen6;
    this.closeOtherSections(8);
  }

  intoggle() {
    this.isOpen7 = !this.isOpen7;
    this.closeOtherSections(9);
  }

  trtoggle() {
    this.isOpen8 = !this.isOpen8;
    this.closeOtherSections(10);
  }

  hsttoggle() {
    this.isOpen9 = !this.isOpen9;
    this.closeOtherSections(11);
  }

  private closeOtherSections(active: number) {
    this.isOpen = active === 2 ? this.isOpen : false;
    this.isOpen2 = active === 3 ? this.isOpen2 : false;
    this.isOpen3 = active === 5 ? this.isOpen3 : false;
    this.isOpen4 = active === 6 ? this.isOpen4 : false;
    this.isOpen5 = active === 7 ? this.isOpen5 : false;
    this.isOpen6 = active === 8 ? this.isOpen6 : false;
    this.isOpen7 = active === 9 ? this.isOpen7 : false;
    this.isOpen8 = active === 10 ? this.isOpen8 : false;
    this.isOpen9 = active === 11 ? this.isOpen9 : false;

    this.activeButton = active;
  }


  setActive(index: number): void {
    this.activeButton = index;
  }
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private _crud: CrudService
  ) {
    const data = localStorage.getItem('adminLoginData')
    if (data) {
      const loginUser = JSON.parse(data)
      console.log(loginUser)
      if (!loginUser.email) {
        this.router.navigate(['/admin'])

      }
    } else {
      this.router.navigate(['/admin'])
    }

    this.login = localStorage.getItem('adminLoginData');
    this.loginData = JSON.parse(this.login);
  }
  ngOnInit() {
    this._crud.adminLogin
  }

  openProfileDialog() {
    this.dialog.open(ProfiledialogComponent, {
      disableClose: true,
    });
  }

  onLogout() {
    localStorage.removeItem('adminLoginData')
    this.router.navigate(['/admin'])
  }
}
