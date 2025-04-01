import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EmployeeData } from 'src/app/interface/salary.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-faculty-salary-records-add',
  templateUrl: './faculty-salary-records-add.component.html',
  styleUrls: ['./faculty-salary-records-add.component.scss']
})
export class FacultySalaryRecordsAddComponent implements OnInit {
  salaryForm!: FormGroup;
  emp_list: EmployeeData[] = [];
  selectedEmp: EmployeeData = {
    source: '',
    id: 0,
    name: '',
    contact_no: 0
  };

  filteredOptions!: Observable<EmployeeData[]>;

  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private toastr: ToastrService,
    private _matref: MatDialogRef<FacultySalaryRecordsAddComponent>

  ) {
    this.getEmp();
  }

  ngOnInit() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.toLocaleString('default', { month: 'short' });
    const formattedDate = currentDate.toISOString().substring(0, 10);

    this.salaryForm = this.fb.group({
      number: [''],
      year: [currentYear.toString()],
      month: [currentMonth],
      cur_date: [formattedDate],
      amount: ['0'],
      contact_no: [''],
      std_id: [],
      admin_id_fk: [1],
      name: [1]
    });

    this.filteredOptions = this.salaryForm.get('number')!.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filter(value))
    );
  }

  private filter(value: string): EmployeeData[] {
    const filterValue = value.toLowerCase();
    console.log(filterValue)
    return this.emp_list.filter((option: EmployeeData) =>
      option.contact_no.toString().toLowerCase().includes(filterValue) ||
      option.name.toLowerCase().includes(filterValue)
    );
  }


  getEmp() {
    this._crud.getemp().subscribe((res) => {
      console.log(res);
      if (Array.isArray(res.data)) {
        this.emp_list = res.data;
      }
    });
  }

  onOptionSelected(option: EmployeeData) {
    console.log(option)
    this.selectedEmp = option;
    this.salaryForm.patchValue({
      number: option.name + '-' + option.contact_no,
      contact_no: option.contact_no,
      std_id: option.id,
      name: option.name
    });
  }

  Add() {
    const data = {
      "emp_id": this.selectedEmp.id,
      "contact_no": this.selectedEmp.contact_no,
      "amount": this.salaryForm.get('amount')?.value,
      "month": this.salaryForm.get('month')?.value,
      "year": this.salaryForm.get('year')?.value,
      "admin_id_fk": 1,
      "cur_date": this.salaryForm.get('cur_date')?.value,
      "name": this.selectedEmp.name

    }
    console.log('Form Submitted', this.salaryForm.value);
    this._crud.add_salary(data).subscribe(
      (res) => {
        if (res.success == 1) {
          this.toastr.success(res.message, 'Success')
          this._matref.close()
        }
      }
    )
  }

  reset(){
    this.salaryForm.reset()
  }
}
