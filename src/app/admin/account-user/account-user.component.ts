import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AddAccntUserFormComponent } from '../add-accnt-user-form/add-accnt-user-form.component';
import { CrudService } from 'src/app/Services/crud.service';
import { User, userRes } from 'src/app/interface/users.interface';
import { UserViewComponent } from '../user-view/user-view.component';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.scss'],
})
export class AccountUserComponent implements OnInit {
  checked = false;
  disabled = false;

  userList: User[] = [];

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService
  ) { }


  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this._crud.getUser().subscribe(
      (res: userRes) => {
        console.log(res);
        if (Array.isArray(res.data)) {
          this.userList = res.data;
        }
      }
    )
  }

  delete_user(id:any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(
      (res) => {
        if(res == 1){
          this._crud.deleteUser(id).subscribe(
            (res) => {
              console.log(res);
              if(res.success == 1){
                this.getUsers();
              }
            }
          )
        }
      }
    )
  }

  add_new_user() {
    this.dialog.open(AddAccntUserFormComponent, {
      disableClose: true,
    });
  }

  viewUser(user:any) {
    this.dialog.open(UserViewComponent, {
      disableClose: true,
      data:user
    })
  }
}
