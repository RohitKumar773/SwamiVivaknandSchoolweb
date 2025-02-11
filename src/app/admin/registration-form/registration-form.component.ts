import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegRes } from 'src/app/interface/studentReg.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;

  constructor(private _fb: FormBuilder, private _crud: CrudService) {
    this.registrationForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      father_name: ['', Validators.required],
      mother_name: ['', Validators.required],
      mobile: ['', Validators.required],
      adhar: ['', Validators.required],
      password: ['', Validators.required],
      profile: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      class: ['', Validators.required],
      section: ['', Validators.required],
      roll_no: ['', Validators.required],
      address: ['', Validators.required],
      transport: ['', Validators.required],
      hostel: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);

    if (this.registrationForm.valid) {
      this._crud.schoolAdmission(this.registrationForm.value).subscribe(
        (res: RegRes) => {
          console.log(res);
          if (res.success == 1) {
            alert(res.message);
          } else {
            alert(res.message);
          }
        },
        (err: Error) => {
          console.log(err.message);
          alert();
        }
      );
    } else {
      alert('Please fill the required fields');
    }
  }
}
