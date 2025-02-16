import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { addStd } from 'src/app/interface/addStudent.interface';
import { RegRes } from 'src/app/interface/studentReg.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  admin = 1;
  AddmissionForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _crud: CrudService,
    private matref: MatDialogRef<RegistrationFormComponent>
  ) {
    this.AddmissionForm = this._fb.group({
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
      admin_id_fk: ['', Validators.required],
      addmission_date: [new Date().toISOString().split('T')[0], Validators.required],
    });
  }

  onSubmit() {
    if (this.AddmissionForm.valid) {
      const formData = new FormData();
      formData.append('name', this.AddmissionForm.get('name')?.value);
      formData.append('email', this.AddmissionForm.get('email')?.value);
      formData.append('mobile', this.AddmissionForm.get('mobile')?.value);
      formData.append('adhar', this.AddmissionForm.get('adhar')?.value);
      formData.append(
        'father_name',
        this.AddmissionForm.get('father_name')?.value
      );
      formData.append(
        'mother_name',
        this.AddmissionForm.get('mother_name')?.value
      );
      formData.append('password', this.AddmissionForm.get('password')?.value);
      formData.append('profile', this.AddmissionForm.get('profile')?.value);
      formData.append('class', this.AddmissionForm.get('class')?.value);
      formData.append('dob', this.AddmissionForm.get('dob')?.value);
      formData.append('gender', this.AddmissionForm.get('gender')?.value);
      formData.append('transport', this.AddmissionForm.get('transport')?.value);
      formData.append('section', this.AddmissionForm.get('section')?.value);
      formData.append('roll_no', this.AddmissionForm.get('roll_no')?.value);
      formData.append('hostel', this.AddmissionForm.get('hostel')?.value);
      formData.append('address', this.AddmissionForm.get('address')?.value);
      formData.append('addmission_date', this.AddmissionForm.get('addmission_date')?.value);
      formData.append(
        'admin_id_fk',
        this.AddmissionForm.get('admin_id_fk')?.value
      );

      this._crud.addStudents(formData).subscribe(
        (res: addStd) => {
          alert('data inserted successfully');
          console.log(res);
          this.matref.close()
        },
        (err: Error) => {
          alert('data not inserted');
          console.log(err);
        }
      );
    }
    else {
      alert('Please Fill all the required fields')
    }
  }
}
