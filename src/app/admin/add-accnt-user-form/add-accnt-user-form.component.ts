import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Role, roleRes } from 'src/app/interface/role.interface';
import { User, userRes } from 'src/app/interface/users.interface';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-add-accnt-user-form',
  templateUrl: './add-accnt-user-form.component.html',
  styleUrls: ['./add-accnt-user-form.component.scss'],
})
export class AddAccntUserFormComponent implements OnInit {
  employeeForm!: FormGroup
  admin = 1;
  gender: any[] = [];
  roleList: Role[] = [];
  imagePreview: string | null = null;
  profile_url: any;
  base_url: string = ''


  constructor(
    private _shared: SharedService,
    private _crud: CrudService,
    private _fb: FormBuilder,
    private matref: MatDialogRef<AddAccntUserFormComponent>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public edit_data: any

  ) {
    this._shared.genderList.subscribe((gen) => {
      this.gender = gen;
    });

    this.employeeForm = this._fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      adhar: ['', Validators.required],
      role: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      profile_img: [''],
      admin_id_fk: ['', Validators.required],
    })

    this._shared.base_url_img.subscribe(
      (res) => {
        this.base_url = res
      }
    )
  }


  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.profile_url = target.files?.[0];

    if (this.profile_url) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(this.profile_url);
    }
  }

  validateMobile() {
    let mobileControl = this.employeeForm.get('mobile');
    if (mobileControl) {
      let value = mobileControl.value;
      mobileControl.setValue(value.replace(/\D/g, ''));
    }
  }

  validateAdhar() {
    let adharControl = this.employeeForm.get('adhar');
    if (adharControl) {
      let value = adharControl.value;
      adharControl.setValue(value.replace(/\D/g, ''));
    }
  }

  ngOnInit() {
    this.getRole();

    if (this.edit_data) {
      this.employeeForm.patchValue(this.edit_data)
      this.imagePreview = this.base_url + this.edit_data.profile_img
    } else {
    }
  }

  getRole() {
    this._crud.getRole().subscribe(
      (res: roleRes) => {
        console.log(res);
        if (Array.isArray(res.data)) {
          this.roleList = res.data
        }
      }
    )
  }

  onSubmit() {
    // console.log(this.employeeForm.value);

    if (this.employeeForm.valid) {
      const formdata = new FormData();
      formdata.append('name', this.employeeForm.get('name')?.value)
      formdata.append('email', this.employeeForm.get('email')?.value);
      formdata.append('mobile', this.employeeForm.get('mobile')?.value);
      formdata.append('adhar', this.employeeForm.get('adhar')?.value);
      formdata.append('profile_img', this.profile_url);
      formdata.append('role', this.employeeForm.get('role')?.value);
      formdata.append('dob', this.employeeForm.get('dob')?.value);
      formdata.append('gender', this.employeeForm.get('gender')?.value);
      formdata.append('password', this.employeeForm.get('password')?.value);
      formdata.append('admin_id_fk', this.employeeForm.get('admin_id_fk')?.value);
      this._crud.addEmployee(formdata).subscribe(
        (res: userRes) => {
          console.log(res);
          if (res.success == 1) {
            this.toastr.success('Employee Added Successfully', 'Success');
            this.matref.close();
          }
          else {
            this.toastr.error('Please Check Your Internet Connection', 'Internet')
          }
        },
        (err: Error) => {
          console.log(err);
          this.toastr.error('Error')
        }
      )
    }
    else {
      this.toastr.warning('Please fill all required fields', 'Warning')
    }
  }


  onUpdate() {
    console.log(this.employeeForm.value);

    if (this.employeeForm.valid) {
      const formdata = new FormData();
      formdata.append('id', this.employeeForm.get('id')?.value)
      formdata.append('name', this.employeeForm.get('name')?.value)
      formdata.append('email', this.employeeForm.get('email')?.value);
      formdata.append('mobile', this.employeeForm.get('mobile')?.value);
      formdata.append('adhar', this.employeeForm.get('adhar')?.value);
      formdata.append('role', this.employeeForm.get('role')?.value);
      formdata.append('dob', this.employeeForm.get('dob')?.value);
      formdata.append('gender', this.employeeForm.get('gender')?.value);
      formdata.append('password', this.employeeForm.get('password')?.value);
      formdata.append('admin_id_fk', this.employeeForm.get('admin_id_fk')?.value);
      formdata.append('updated_at', '');

      if (this.profile_url) {
        formdata.append('profile_img', this.profile_url);
      } else {
        formdata.append('profile_img', this.edit_data.profile_img);
      }

      this._crud.addEmployee(formdata).subscribe(
        (res: userRes) => {
          console.log(res);
          if (res.success == 1) {
            this.toastr.success('Employee Update Successfully', 'Success');
            this.matref.close();
          }
          else {
            this.toastr.warning('Please Check Your Internet Connection', 'Internet')
          }
        },
        (err: Error) => {
          console.log(err);
          this.toastr.error('Please Check Your Internet Connection')
        }
      )
    }
    else {
      this.toastr.warning('Please fill all required fields', 'Warning')
    }
  }

  resetForm() {
    this.employeeForm.reset()
  }


}
