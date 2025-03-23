import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { map, Observable, startWith } from 'rxjs';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-faculty-salary-records-add',
  templateUrl: './faculty-salary-records-add.component.html',
  styleUrls: ['./faculty-salary-records-add.component.scss']
})
export class FacultySalaryRecordsAddComponent {
  salaryForm!: FormGroup;
  myControl = this.fb.control('');
  options: string[] = ['101', '102', '103', '104'];
  filteredOptions!: Observable<string[]>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.salaryForm = this.fb.group({
      number: [''],
      name: [''],
      timing: ['']
    });

    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this.filter(value))
    // );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  Add() {
    console.log('Form Submitted', this.salaryForm.value);
  }
}
