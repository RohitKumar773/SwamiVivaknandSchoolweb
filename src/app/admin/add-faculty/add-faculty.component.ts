import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Faculty } from 'src/app/interface/faculty.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.scss'],
})
export class AddFacultyComponent implements OnInit {
  addFacultyForm!: FormGroup;

  admin = 1;
  profile_url: any;
  imagePreview: string | null = null;

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

  constructor(
    private _fb: FormBuilder,
    private _crud: CrudService,
    private matref: MatDialogRef<AddFacultyComponent>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public edit_data: any
  ) {
    this.addFacultyForm = this._fb.group({
      id: [''],
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
  ngOnInit() {
    console.log(this.edit_data);
    if (this.edit_data) {
      this.addFacultyForm.patchValue(this.edit_data)
    }
    // else{
    //   console.log(this.edit_data);

    // }

  }

  validateMobile() {
    let mobileControl = this.addFacultyForm.get('contact_no');
    if (mobileControl) {
      let value = mobileControl.value;
      mobileControl.setValue(value.replace(/\D/g, ''));
    }
  }
  validateAdhar() {
    let adharControl = this.addFacultyForm.get('aadhar_no');
    if (adharControl) {
      let value = adharControl.value;
      adharControl.setValue(value.replace(/\D/g, ''));
    }
  }

  onSubmit() {
    console.log(this.addFacultyForm.value);

    if (this.addFacultyForm.valid) {
      const formData = new FormData();
      formData.append('name', this.addFacultyForm.get('name')?.value);
      formData.append('dob', this.addFacultyForm.get('dob')?.value);
      formData.append('gender', this.addFacultyForm.get('gender')?.value);
      formData.append('father', this.addFacultyForm.get('father')?.value);
      formData.append('mother', this.addFacultyForm.get('mother')?.value);
      formData.append('email', this.addFacultyForm.get('email')?.value);
      formData.append('contact_no', this.addFacultyForm.get('contact_no')?.value);
      formData.append('aadhar_no', this.addFacultyForm.get('aadhar_no')?.value);
      formData.append('profile_img', this.profile_url);
      formData.append('address', this.addFacultyForm.get('address')?.value);
      formData.append('graduation_institue', this.addFacultyForm.get('graduation_institue')?.value);
      formData.append('grdt_stream', this.addFacultyForm.get('grdt_stream')?.value);
      formData.append('grdt_passing_year', this.addFacultyForm.get('grdt_passing_year')?.value);
      formData.append('grdt_percentage', this.addFacultyForm.get('grdt_percentage')?.value);
      formData.append('last_education', this.addFacultyForm.get('last_education')?.value);
      formData.append('last_ed_stream', this.addFacultyForm.get('last_ed_stream')?.value);
      formData.append('last_ed_passing_year', this.addFacultyForm.get('last_ed_passing_year')?.value);
      formData.append('last_ed_percentage', this.addFacultyForm.get('last_ed_percentage')?.value);
      formData.append('previous_school', this.addFacultyForm.get('previous_school')?.value);
      formData.append('prev_designation', this.addFacultyForm.get('prev_designation')?.value);
      formData.append('prev_experience', this.addFacultyForm.get('prev_experience')?.value);
      formData.append('prev_speciality', this.addFacultyForm.get('prev_speciality')?.value);
      formData.append('last_salary', this.addFacultyForm.get('last_salary')?.value);
      formData.append('current_salary', this.addFacultyForm.get('current_salary')?.value);
      formData.append('bank_name', this.addFacultyForm.get('bank_name')?.value);
      formData.append('account_no', this.addFacultyForm.get('account_no')?.value);
      formData.append('ifsc_code', this.addFacultyForm.get('ifsc_code')?.value);
      formData.append('password', this.addFacultyForm.get('password')?.value);
      formData.append('admin_id_fk', this.addFacultyForm.get('admin_id_fk')?.value);

      this._crud.addFaculty(formData).subscribe(
        (res: Faculty) => {
          console.log(res);
          this.matref.close();
          this.toastr.success('Faculty added successfully', 'Success')
        },
        (err: Error) => {
          this.toastr.error('Faculty not added', 'Error')
          console.log(err);
        }
      )
    } else {
      this.toastr.warning('Please fill al required fields', 'Warning')
    }
  }


  onUpdate() {
    console.log(this.addFacultyForm.value);

    if (this.addFacultyForm.valid) {
      const formData = new FormData();
      formData.append('id', this.addFacultyForm.get('id')?.value);
      formData.append('name', this.addFacultyForm.get('name')?.value);
      formData.append('dob', this.addFacultyForm.get('dob')?.value);
      formData.append('gender', this.addFacultyForm.get('gender')?.value);
      formData.append('father', this.addFacultyForm.get('father')?.value);
      formData.append('mother', this.addFacultyForm.get('mother')?.value);
      formData.append('contact_no', this.addFacultyForm.get('contact_no')?.value);
      formData.append('aadhar_no', this.addFacultyForm.get('aadhar_no')?.value);
      formData.append('profile_img', this.profile_url);
      formData.append('address', this.addFacultyForm.get('address')?.value);
      formData.append('graduation_institue', this.addFacultyForm.get('graduation_institue')?.value);
      formData.append('grdt_stream', this.addFacultyForm.get('grdt_stream')?.value);
      formData.append('grdt_passing_year', this.addFacultyForm.get('grdt_passing_year')?.value);
      formData.append('grdt_percentage', this.addFacultyForm.get('grdt_percentage')?.value);
      formData.append('last_education', this.addFacultyForm.get('last_education')?.value);
      formData.append('last_ed_stream', this.addFacultyForm.get('last_ed_stream')?.value);
      formData.append('last_ed_passing_year', this.addFacultyForm.get('last_ed_passing_year')?.value);
      formData.append('last_ed_percentage', this.addFacultyForm.get('last_ed_percentage')?.value);
      formData.append('previous_school', this.addFacultyForm.get('previous_school')?.value);
      formData.append('prev_designation', this.addFacultyForm.get('prev_designation')?.value);
      formData.append('prev_experience', this.addFacultyForm.get('prev_experience')?.value);
      formData.append('prev_speciality', this.addFacultyForm.get('prev_speciality')?.value);
      formData.append('last_salary', this.addFacultyForm.get('last_salary')?.value);
      formData.append('current_salary', this.addFacultyForm.get('current_salary')?.value);
      formData.append('bank_name', this.addFacultyForm.get('bank_name')?.value);
      formData.append('account_no', this.addFacultyForm.get('account_no')?.value);
      formData.append('ifsc_code', this.addFacultyForm.get('ifsc_code')?.value);
      formData.append('password', this.addFacultyForm.get('password')?.value);

      this._crud.addFaculty(formData).subscribe(
        (res) => {
          console.log(res);
          if (res.success) {
            this.toastr.success('Faculty Updated', 'Success')
            this.matref.close()
          }
          else {
            console.log(res);
            this.toastr.error('Faculty Not Updated', 'Error')
          }

        },
        (err: Error) => {
          console.log(err);
          this.toastr.error('Faculty Not Updated', 'Error')
        }
      )
    }
    else {
      this.toastr.warning('Please fill all required fields', 'Warning')
    }
  }
}
