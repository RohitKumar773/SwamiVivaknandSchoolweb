import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { addStd } from 'src/app/interface/addStudent.interface';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
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

  admin = 1;
  AddmissionForm!: FormGroup;
  classes: any[] = [];
  sections: any[] = [];
  gender: any[] = [];

  constructor(
    private _fb: FormBuilder,
    private _crud: CrudService,
    private _shared: SharedService,
    private matref: MatDialogRef<RegistrationFormComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public edit_data: any
  ) {
    this.AddmissionForm = this._fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      father_name: ['', Validators.required],
      mother_name: ['', Validators.required],
      mobile: ['', Validators.required],
      adhar: [''],
      password: ['', Validators.required],
      profile: [''],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      class: [' ', Validators.required],
      section: [' ', Validators.required],
      roll_no: ['', Validators.required],
      address: ['', Validators.required],
      transport: ['1', Validators.required],
      hostel: ['1', Validators.required],
      admin_id_fk: ['', Validators.required],
      addmission_date: [
        new Date().toISOString().split('T')[0],
        Validators.required,
      ],
    });

    this._shared.classList.subscribe((cls) => {
      this.classes = cls;
    });
    this._shared.sectionList.subscribe(
      (sect) => {
        this.sections = sect;
      }
    );
    this._shared.genderList.subscribe((gen) => {
      this.gender = gen;
    })
  }

  validateMobile() {
    let mobileControl = this.AddmissionForm.get('mobile');
    if (mobileControl) {
      let value = mobileControl.value;
      mobileControl.setValue(value.replace(/\D/g, ''));
    }
  }
  validateAdhar() {
    let adharControl = this.AddmissionForm.get('adhar');
    if (adharControl) {
      let value = adharControl.value;
      adharControl.setValue(value.replace(/\D/g, ''));
    }
  }
  ngOnInit() {
    console.log(this.edit_data);
    if (this.edit_data) {
      this.AddmissionForm.patchValue(this.edit_data);
    } else {
    }
  }

  onSubmit() {
    console.log(this.AddmissionForm.value);
    if (this.AddmissionForm.valid) {
      const formData = new FormData();
      formData.append('name', this.AddmissionForm.get('name')?.value);
      formData.append('email', this.AddmissionForm.get('email')?.value);
      formData.append('mobile', this.AddmissionForm.get('mobile')?.value);
      formData.append('adhar', this.AddmissionForm.get('adhar')?.value);
      formData.append('father_name', this.AddmissionForm.get('father_name')?.value);
      formData.append('mother_name', this.AddmissionForm.get('mother_name')?.value);
      formData.append('password', this.AddmissionForm.get('password')?.value);
      formData.append('class', this.AddmissionForm.get('class')?.value);
      formData.append('dob', this.AddmissionForm.get('dob')?.value);
      formData.append('gender', this.AddmissionForm.get('gender')?.value);
      formData.append('transport', this.AddmissionForm.get('transport')?.value);
      formData.append('section', this.AddmissionForm.get('section')?.value);
      formData.append('roll_no', this.AddmissionForm.get('roll_no')?.value);
      formData.append('hostel', this.AddmissionForm.get('hostel')?.value);
      formData.append('address', this.AddmissionForm.get('address')?.value);
      formData.append('profile', this.profile_url);
      formData.append('addmission_date', this.AddmissionForm.get('addmission_date')?.value);
      formData.append('admin_id_fk', this.AddmissionForm.get('admin_id_fk')?.value);

      this._crud.addStudents(formData).subscribe(
        (res: addStd) => {
          alert('data inserted successfully');
          console.log(res);
          this.matref.close();
          this.toastr.success('Student Registered Successfully', 'Success')
        },
        (err: Error) => {
          this.toastr.error('Registration Failed', 'Error')
          console.log(err);
        }
      );
    } else {
      this.toastr.warning('Please fill all required fields', 'Warning')
    }
  }

  onUpdate() {
    console.log('update funcation run')
    console.log(this.AddmissionForm.value);
    if (this.AddmissionForm.valid) {
      const formData = new FormData();
      formData.append('id', this.AddmissionForm.get('id')?.value);
      formData.append('name', this.AddmissionForm.get('name')?.value);
      formData.append('mobile', this.AddmissionForm.get('mobile')?.value);
      formData.append('adhar', this.AddmissionForm.get('adhar')?.value);
      formData.append('father_name', this.AddmissionForm.get('father_name')?.value);
      formData.append('mother_name', this.AddmissionForm.get('mother_name')?.value);
      formData.append('password', this.AddmissionForm.get('password')?.value);
      formData.append('profile', this.profile_url);
      formData.append('class', this.AddmissionForm.get('class')?.value);
      formData.append('dob', this.AddmissionForm.get('dob')?.value);
      formData.append('gender', this.AddmissionForm.get('gender')?.value);
      formData.append('transport', this.AddmissionForm.get('transport')?.value);
      formData.append('section', this.AddmissionForm.get('section')?.value);
      formData.append('roll_no', this.AddmissionForm.get('roll_no')?.value);
      formData.append('hostel', this.AddmissionForm.get('hostel')?.value);
      formData.append('address', this.AddmissionForm.get('address')?.value);
      formData.append('addmission_date', this.AddmissionForm.get('addmission_date')?.value);
      formData.append('admin_id_fk', this.AddmissionForm.get('admin_id_fk')?.value);

      this._crud.addStudents(formData).subscribe(
        (res: addStd) => {
          this.toastr.success('Student Registered Successfully', 'Success')
          console.log(res);
          this.matref.close();
        },
        (err: Error) => {
          this.toastr.error('Registration Failed', 'Error')
          console.log(err);
        }
      );
    } else {
      this.toastr.warning('Please fill all required fields', 'Warning')
    }
  }

  resetForm() {
    this.AddmissionForm.reset();
  }
}
