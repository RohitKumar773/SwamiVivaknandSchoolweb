import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AddAccntUserFormComponent } from '../add-accnt-user-form/add-accnt-user-form.component';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.scss'],
})
export class AccountUserComponent {
  checked = false;
  disabled = false;
  
  constructor(private dialog: MatDialog) {}

  delete_user() {
    this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });
  }

  add_new_user() {
    this.dialog.open(AddAccntUserFormComponent, {
      disableClose: true,
    });
  }
}
