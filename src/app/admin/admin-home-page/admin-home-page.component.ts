import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfiledialogComponent } from '../profiledialog/profiledialog.component';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss']
})
export class AdminHomePageComponent {

  constructor(
    private dialog:MatDialog
  ){}



  openProfileDialog(){
    this.dialog.open(ProfiledialogComponent, {
      disableClose:true
    })
  }
}
