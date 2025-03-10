import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-accnt-role-form',
  templateUrl: './add-accnt-role-form.component.html',
  styleUrls: ['./add-accnt-role-form.component.scss']
})
export class AddAccntRoleFormComponent implements OnInit {
  roleForm!: FormGroup
  admin = 1;


  constructor(
    private _crud: CrudService,
    private fb: FormBuilder,
    private matref:MatDialogRef<AddAccntRoleFormComponent>,
    private toastr:ToastrService
  ) {
    this.roleForm = this.fb.group({
      id: [''],
      role_name: ['', Validators.required],
      admin_id_fk: ['', Validators.required]
    });
  }



  ngOnInit() { }

  onSubmit() {
    if (this.roleForm.valid) {
      const formData = new FormData();
      formData.append('id', this.roleForm.get('id')?.value);
      formData.append('role_name', this.roleForm.get('role_name')?.value);
      formData.append('admin_id_fk', this.roleForm.get('admin_id_fk')?.value);

      this._crud.addRole(formData).subscribe(
        (res:Event) => {
          console.log(res);
          this.matref.close()
          this.toastr.success('Role Added Successfully','Success')
        } ,
        (err:Error) => {
          console.log(err);
          this.toastr.error('Role can not be added', 'Error')
        }
      )
    }
    else {
      this.toastr.warning('Please fill all required fields', 'Warning')
    }

  }

  resetForm() {
    this.roleForm.reset()
  }

}
