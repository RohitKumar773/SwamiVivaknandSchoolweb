import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-add-batch-form',
  templateUrl: './add-batch-form.component.html',
  styleUrls: ['./add-batch-form.component.scss'],
  standalone: false
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
    private fb: FormBuilder,
    private toastr: ToastrService,
    private matref: MatDialogRef<AddBatchFormComponent>
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

  getUpdateData(cls: string) {
    this._crud.GetBatchesbyCls(cls).subscribe(
      (res) => {
        console.log(res.data.length);
        if (res.data.length == 0) {
          this.getSubByClass(this.SeletedClass)
        }
        this.SeletedClass = res.data[0].class
        const upadtedata = res.data
        upadtedata.forEach((batch: any) => {
          console.log(batch)
          this.addBatchRow(batch.subject, batch.time, batch.faculty_id);
        });
      }
    )
  }

  get batchTable(): FormArray {
    return this.batchForm.get('batchTable') as FormArray;
  }

  addBatchRow(subject: string = '', timing: string = '', facultyId: any = ''): void {
    const row = this.fb.group({
      subject: [subject],
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
    this.batchTable.clear();
    this.SeletedClass = event.value;
    this._crud.getSubjectByClass(this.SeletedClass).subscribe(
      (res) => {
        console.log('Subjects:', res.data);
        this.subject_data = res.data;
      })
    this.getUpdateData(this.SeletedClass)

  }

  getSubByClass(cls: string) {
    this._crud.getSubjectByClass(cls).subscribe(
      (res) => {
        console.log('Subjects:', res.data);
        this.subject_data = res.data;

        this.isSubjectDisabled = true;
        this.batchTable.clear();
        for (const subject of this.subject_data) {
          console.log(subject);

          this.addBatchRow(subject.subject_name);
        }
      }
    );
  }

  submitBatch(): void {
    if (this.batchForm.invalid) {
      this.toastr.success('Please fill all the required fildes', 'Warning');
      return
    }
    const batchData = {
      class: this.SeletedClass,
      sec_id: null,
      admin_id: 1,
      batchDetails: this.batchForm.value.batchTable,
    };

    console.log('Submitting Batch:', batchData);

    this._crud.addBatches(batchData).subscribe(
      (res: any) => {
        console.log('!', res);
        if (res.success == 1) {
          this.toastr.success('Batch added successfully', 'Success');
          this.matref.close(1)
        }
      },
      (err) => {
        console.error('Error adding batch:', err);
      }
    );
  }

  UpdatesubmitBatch(): void {
    const batchData = {
      class: this.SeletedClass,
      sec_id: null,
      admin_id: 1,
      batchDetails: this.batchForm.value.batchTable,
    };

    console.log('Submitting Batch:', batchData);

    this._crud.UpdaetBatches(batchData).subscribe(
      (res) => {
        console.log('Batch Update successfully!', res);
      },
      (err) => {
        console.error('Error adding batch:', err);
      }
    );
  }

  resetForm() {
    this.batchForm.reset()
  }
}
