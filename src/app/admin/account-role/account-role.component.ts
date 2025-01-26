import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AddAccntRoleFormComponent } from '../add-accnt-role-form/add-accnt-role-form.component';

@Component({
  selector: 'app-account-role',
  templateUrl: './account-role.component.html',
  styleUrls: ['./account-role.component.scss'],
})
export class AccountRoleComponent {

  constructor(
    private dialog:MatDialog
  ){}
  
  delete_role() {
    this.dialog.open(ConfirmBoxComponent,{
      disableClose:true
    })
  }

  add_new_role() {
    this.dialog.open(AddAccntRoleFormComponent,{
      disableClose:true
    })
  }
}
