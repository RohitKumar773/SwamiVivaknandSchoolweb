import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-add-batch-form',
  templateUrl: './add-batch-form.component.html',
  styleUrls: ['./add-batch-form.component.scss']
})
export class AddBatchFormComponent implements OnInit {
  classes: any[] = [];
  subject_data: any[] = [];
  Faculty_data: any[] = [];
  batchForm: FormGroup;

  SeletedClass: string = '';
  isSubjectDisabled: boolean = false;

  constructor(
    private _shared: SharedService,
    private _crud: CrudService,
    private fb: FormBuilder
  ) {
    this._shared.classList.subscribe(
      (cls) => {
        this.classes = cls;
      }
    );
    this.getFaculty();

    this.batchForm = this.fb.group({
      class: [''],
      batchTable: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addBatchRow();
  }

  get batchTable(): FormArray {
    return this.batchForm.get('batchTable') as FormArray;
  }

  addBatchRow(subjectId: any = '', timing: string = '', facultyId: any = ''): void {
    const row = this.fb.group({
      subject: [subjectId],
      timing: [timing],
      faculty: [facultyId],
    });
    this.batchTable.push(row);
  }

  getFaculty() {
    this._crud.getFaculty().subscribe(
      (res) => {
        console.log(res);
        this.Faculty_data = res.data;
      }
    );
  }

  onClassChange(event: MatSelectChange): void {
    this.SeletedClass = event.value;
    this._crud.getSubjectByClass(event.value).subscribe(
      (res) => {
        console.log('Subjects:', res.data);
        this.subject_data = res.data;

        // Auto-fill subjects and disable the dropdown
        this.isSubjectDisabled = true;
        this.batchTable.clear();
        for (const subject of this.subject_data) {
          this.addBatchRow(subject.id); // Auto-fill the subject ID
        }
      }
    );
  }

  submitBatch(): void {
    const batchData = {
      class: this.SeletedClass,
      sec_id: null,
      admin_id: 1, // Set appropriate admin ID
      batchDetails: this.batchForm.value.batchTable,
    };

    console.log('Submitting Batch:', batchData);

    this._crud.addBatches(batchData).subscribe(
      (res) => {
        console.log('Batch added successfully!', res);
      },
      (err) => {
        console.error('Error adding batch:', err);
      }
    );
  }
}
