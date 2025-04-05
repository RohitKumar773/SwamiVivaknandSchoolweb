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
  filterEmp: User[] = [];

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
          this.filterEmp = res.data
        }
      }
    )
  }

  onSearch(event: any) {
    const filter = event.target.value.toLowerCase() || '';
    this.filterEmp = this.userList.filter(data =>
      data?.name?.toLowerCase().includes(filter) ||
      data?.mobile?.toString().includes(filter)
    )

  }

  delete_user(id: any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(
      (res) => {
        if (res == 1) {
          this._crud.deleteUser(id).subscribe(
            (res) => {
              console.log(res);
              if (res.success == 1) {
                this.getUsers();
              }
            }
          )
        }
      }
    )
  }

  add_new_user() {
    const openDig = this.dialog.open(AddAccntUserFormComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(() => {
      this.getUsers();
    })
  }

  onEdit(user: User) {
    console.log(user);

    const openDig = this.dialog.open(AddAccntUserFormComponent, {
      disableClose: true,
      data: user
    });

    openDig.afterClosed().subscribe(() => {
      this.getUsers();
    })

  }

  viewUser(user: any) {
    this.dialog.open(UserViewComponent, {
      disableClose: true,
      data: user
    })
  }
}
