import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private _shared: SharedService,
    private _crud: CrudService,
    private _fb: FormBuilder,
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
    console.log(this.employeeForm.value);

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
          alert('success')
        }
        else {
          alert('internet')
        }
      },
      (err: Error) => {
        console.log(err);
        alert('issue')
      }
    )


  }

  resetForm() { }


}
