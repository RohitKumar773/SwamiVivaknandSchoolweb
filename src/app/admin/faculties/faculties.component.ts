import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FacultiesFormComponent } from '../faculties-form/faculties-form.component';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent {

  constructor (
    private dialog:MatDialog
  ){}

  add_new_std() {
    this.dialog.open(FacultiesFormComponent, {
      disableClose: true,
    });
}
}