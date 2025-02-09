import { Component } from '@angular/core';
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
export class AdminHomePageComponent {
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

  toggle() {
    this.isOpen = !this.isOpen;
  }
  regToggle() {
    this.isOpen2 = !this.isOpen2;
  }
  mdtoggle() {
    this.isOpen3 = !this.isOpen3;
  }
  fttoggle() {
    this.isOpen4 = !this.isOpen4;
  }
  festoggle() {
    this.isOpen5 = !this.isOpen5;
  }
  cstoggle() {
    this.isOpen6 = !this.isOpen6;
  }
  intogge() {
    this.isOpen7 = !this.isOpen7;
  }
  trtoggle() {
    this.isOpen8 = !this.isOpen8;
  }
  hsttoggle() {
    this.isOpen9 = !this.isOpen9;
  }

  setActive(index: number): void {
    this.activeButton = index;
  }
  constructor(private dialog: MatDialog) {}

  openProfileDialog() {
    this.dialog.open(ProfiledialogComponent, {
      disableClose: true,
    });
  }
}
