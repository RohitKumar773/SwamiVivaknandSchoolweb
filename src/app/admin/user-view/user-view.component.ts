import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interface/users.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user: User = {
    id: '',
    name: '',
    email: '',
    mobile: '',
    adhar: '',
    dob: '',
    password: '',
    gender: '',
    role: '',
    profile_img: '',
    role_id_fk: '',
    admin_id_fk: '',
  }


  constructor(
    private _crud: CrudService,
    private matref: MatDialogRef<UserViewComponent>,

    @Inject(MAT_DIALOG_DATA) public edit_data: any
  ) { }

  ngOnInit() {
    this.user = this.edit_data
  }

}
