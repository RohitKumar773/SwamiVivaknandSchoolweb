import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Student } from 'src/app/interface/student.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-std-fee',
  templateUrl: './add-std-fee.component.html',
  styleUrls: ['./add-std-fee.component.scss']
})
export class AddStdFeeComponent implements OnInit {
  StdFeeForm!: FormGroup;
  std_list: Student[] = [];
  selectedStd: Student = {
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
  };

  filteredOptions!: Observable<Student[]>;

  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private _matref: MatDialogRef<AddStdFeeComponent>,
    private toastr: ToastrService
  ) {
    this.getStd();
  }

  ngOnInit() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.toLocaleString('default', { month: 'short' });
    const formattedDate = currentDate.toISOString().substring(0, 10);
    console.log(currentYear)
    this.StdFeeForm = this.fb.group({
      number: [],
      year: [currentYear.toString()],
      month: [currentMonth],
      cur_date: [formattedDate],
      amount: [],
      contact: [],
      std_id: [],
      admin_id_fk: [1],
      name: [],
      class: [],
      roll_no: []
    });

    this.filteredOptions = this.StdFeeForm.get('number')!.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filter(value))
    );
  }

  private filter(value: string): Student[] {
    const filterValue = value.toLowerCase();
    return this.std_list.filter((option: Student) =>
      option.mobile.toString().toLowerCase().includes(filterValue) ||
      option.name.toLowerCase().includes(filterValue)
    );
  }

  getStd() {
    this._crud.getAllStudent().subscribe((res) => {
      if (Array.isArray(res.data)) {
        this.std_list = res.data;
      }
    });
  }

  onOptionSelected(option: Student) {
    console.log(option)
    this.selectedStd = option;
    this.StdFeeForm.patchValue({
      number: `${option.name} - ${option.mobile}`,
      contact: option.mobile,
      std_id: option.id,
      name: option.name,
      class: option.class,
      roll_no: option.roll_no
    });
  }

  Add() {
    const data = {
      "std_name": this.StdFeeForm.get('name')?.value,
      "class": this.StdFeeForm.get('class')?.value,
      "std_roll": this.selectedStd.roll_no,
      "fee_date": this.StdFeeForm.get('cur_date')?.value,
      "amount": this.StdFeeForm.get('amount')?.value,
      "contact": this.StdFeeForm.get('contact')?.value,
      "year": this.StdFeeForm.get('year')?.value,
      "month": this.StdFeeForm.get('month')?.value,
      "admin_id_fk": this.StdFeeForm.get('admin_id_fk')?.value,
      "std_id": this.selectedStd.id
    }


    console.log(data)
    this._crud.addStdFee(data).subscribe(
      (res) => {
        if (res.success == 1) {
          this._matref.close(1)
          this.toastr.success('Fee Added successfully')
        }
        console.log(res);
      },
      (error) => {
        this.toastr.error('Failed to add fee')
      }
    );
  }
}
