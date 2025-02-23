import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Faculty } from 'src/app/interface/faculty.interface';

@Component({
  selector: 'app-faculty-view',
  templateUrl: './faculty-view.component.html',
  styleUrls: ['./faculty-view.component.scss']
})
export class FacultyViewComponent implements OnInit{
  img_url: string = 'http://localhost/sawamivivekanand/'
  
  faculty : Faculty = {
    id: '',
    name: '',
    dob: '',
    gender: '',
    father: '',
    mother: '',
    email: '',
    contact_no: '',
    aadhar_no: '',
    profile_img: '',
    address: '',
    graduation_institue: '',
    grdt_stream: '',
    grdt_passing_year: '',
    grdt_percentage: '',
    last_education: '',
    last_ed_stream: '',
    last_ed_passing_year: '',
    last_ed_percentage: '',
    previous_school: '',
    prev_designation: '',
    prev_experience: '',
    prev_speciality: '',
    last_salary: '',
    current_salary: '',
    bank_name: '',
    account_no: '',
    ifsc_code: '',
    admin_id_fk: '',
    password: '',
    updated_at: null
  }

  constructor(
    private dialog:MatDialogRef<FacultyViewComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_data:any
  ){}

  ngOnInit() {
    this.faculty = this.edit_data
  }

}
