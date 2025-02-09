import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;

  constructor(private _fb: FormBuilder) {
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
      class: ['Select Class', Validators.required],
      section: ['1', Validators.required],
      roll_no: ['', Validators.required],
      address: ['', Validators.required],
      transport: ['', Validators.required],
      hostel: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
