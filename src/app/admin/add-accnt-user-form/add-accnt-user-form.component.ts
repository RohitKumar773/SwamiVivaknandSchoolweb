import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Role, roleRes } from 'src/app/interface/role.interface';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-add-accnt-user-form',
  templateUrl: './add-accnt-user-form.component.html',
  styleUrls: ['./add-accnt-user-form.component.scss'],
})
export class AddAccntUserFormComponent implements OnInit {
  userForm!: FormGroup
  admin = 1;

  gender: any[] = [];
  roleList: Role[] = [];

  imagePreview: string | null = null;
  profile_url: any;

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
    // let mobileControl = this.userForm.get('mobile');
    // if (mobileControl) {
    //   let value = mobileControl.value;
    //   mobileControl.setValue(value.replace(/\D/g, ''));
    // }
  }
  validateAdhar() {
    // let adharControl = this.userForm.get('adhar');
    // if (adharControl) {
    //   let value = adharControl.value;
    //   adharControl.setValue(value.replace(/\D/g, ''));
    // }
  }

  constructor(
    private _shared: SharedService,
    private _crud: CrudService
  ) {
    this._shared.genderList.subscribe((gen) => {
      this.gender = gen;
    })
  }
  ngOnInit() {
    this.getRole();
  }

  getRole() {
    this._crud.getRole().subscribe(
      (res: roleRes) => {
        console.log(res);
        if(Array.isArray(res.data)){
          this.roleList = res.data
        }
      }
    )
  }


  resetForm() { }


}
