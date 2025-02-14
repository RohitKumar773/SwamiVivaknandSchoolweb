import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.scss'],
})
export class AddFacultyComponent {
  addFacultyForm!: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.addFacultyForm = this._fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      father: ['', Validators.required],
      mother: ['', Validators.required],
      email: ['', Validators.required],
      contact_no: ['', Validators.required],
      aadhar_no: ['', Validators.required],
      profile_img: ['', Validators.required],
      address: ['', Validators.required],
      graduation_institue: ['', Validators.required],
      grdt_stream: ['', Validators.required],
      grdt_passing_year: ['', Validators.required],
      grdt_percentage: ['', Validators.required],
      last_education: ['', Validators.required],
      last_ed_stream: ['', Validators.required],
      last_ed_passing_year: ['', Validators.required],
      last_ed_percentage: ['', Validators.required],
      previous_school: ['', Validators.required],
      prev_designation: ['', Validators.required],
      prev_experience: ['', Validators.required],
      prev_speciality: ['', Validators.required],
      last_salary: ['', Validators.required],
      current_salary: ['', Validators.required],
      bank_name: ['', Validators.required],
      account_no: ['', Validators.required],
      ifsc_code: ['', Validators.required],
      password: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    });
  }

  onSubmit() {
    if(this.addFacultyForm.valid){
      const formData = new FormData();
      formData.append('name', this.addFacultyForm.get('name')?.value);
      formData.append('dob', this.addFacultyForm.get('dob')?.value);
      formData.append('gender', this.addFacultyForm.get('gender')?.value);
      formData.append('father', this.addFacultyForm.get('father')?.value);
      formData.append('mother', this.addFacultyForm.get('mother')?.value);
      formData.append('email', this.addFacultyForm.get('email')?.value);
      formData.append('mobile', this.addFacultyForm.get('mobile')?.value);
      formData.append('aadhar_no', this.addFacultyForm.get('aadhar_no')?.value);
      formData.append('profile_img', this.addFacultyForm.get('profile_img')?.value);
      // formData.append('')

    }
    else{
      alert('Please Fill all the required fieldss')
    }
  }
}
