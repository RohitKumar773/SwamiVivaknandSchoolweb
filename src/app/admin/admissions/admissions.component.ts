import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss'],
})
export class AdmissionsComponent {
  constructor(private dialog: MatDialog) {}

  add_new_std() {
    this.dialog.open(RegistrationFormComponent, {
      disableClose: true,
    });
  }

  delete_application() {
    this.dialog.open(ConfirmBoxComponent,{

      disableClose:true
    })
  }
}
