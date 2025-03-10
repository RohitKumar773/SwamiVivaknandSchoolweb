import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AddAccntRoleFormComponent } from '../add-accnt-role-form/add-accnt-role-form.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Role, roleRes } from 'src/app/interface/role.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account-role',
  templateUrl: './account-role.component.html',
  styleUrls: ['./account-role.component.scss'],
})
export class AccountRoleComponent implements OnInit {

  roleList: Role[] = [];
  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.getRole();
  }


  getRole() {
    this._crud.getRole().subscribe(
      (res: roleRes) => {
        console.log(res.data);
        if (Array.isArray(res.data)) {
          this.roleList = res.data
        }
      }
    )
  }

  delete_role(id: any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true
    });


    openDig.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res == 1) {
          this._crud.deleteRole(id).subscribe(
            (res) => {
              console.log(res);
              if (res.success == 1) {
                this.toastr.success('Role Deleted Successfully', 'Deleted')
                this.getRole()
              }
            }
          )
        }
      }
    )
  }

  add_new_role() {
   const openDig = this.dialog.open(AddAccntRoleFormComponent, {
      disableClose: true
    });

    openDig.afterClosed().subscribe(() => {
      this.getRole();
    })
  }
}
