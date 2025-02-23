import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student, StudentResponse } from 'src/app/interface/student.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.scss'],
})
export class RegistrationViewComponent implements OnInit {
  img_url: string = 'http://localhost/sawamivivekanand/'
  
  student: Student = {
    id: '',
    name: '',
    email: '',
    mobile: '',
    adhar: '',
    father_name: '',
    mother_name: '',
    password: '',
    profile: '',
    class: '',
    admin_id_fk: '',
    dob: '',
    gender: '',
    transport: '',
    section: '',
    roll_no: '',
    hostel: '',
    address: '',
    addmission_date: ''
  }

  constructor(
    private dialog: MatDialogRef<RegistrationViewComponent>,
    private _crud: CrudService,
    @Inject(MAT_DIALOG_DATA) public edit_data: any
  ) { }

  ngOnInit() {
    this.student = this.edit_data
  }

}
