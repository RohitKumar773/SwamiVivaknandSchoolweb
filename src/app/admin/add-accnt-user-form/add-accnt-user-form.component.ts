import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-add-accnt-user-form',
  templateUrl: './add-accnt-user-form.component.html',
  styleUrls: ['./add-accnt-user-form.component.scss'],
})
export class AddAccntUserFormComponent {
  userForm!: FormGroup
  admin = 1;

  gender: any[] = []

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
    private _shared: SharedService
  ) {
    this._shared.genderList.subscribe((gen) => {
      this.gender = gen;
    })
  }


  resetForm() { }


}
