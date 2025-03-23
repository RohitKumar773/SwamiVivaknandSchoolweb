import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { ToastrService } from 'ngx-toastr';
import { Examinations } from 'src/app/interface/examinations.interface';
import { SubjectRes, GroupedClass, Subject } from 'src/app/interface/subject.interface';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-addexam',
  templateUrl: './addexam.component.html',
  styleUrls: ['./addexam.component.scss']
})
export class AddexamComponent implements OnInit {
  class: any[] = [];
  types: any[] = [];
  subjectList: Subject[] = [];
  examinationForm!: FormGroup
  admin = 1;

  constructor(
    private _shared: SharedService,
    private _crud: CrudService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private matref: MatDialogRef<AddexamComponent>
  ) {
    this._shared.classList.subscribe(
      (cls) => {
        this.class = cls;
      }
    );

    this._shared.examTypeList.subscribe(
      (types) => {
        this.types = types
      }
    );

    this.examinationForm = this.fb.group({
      id: [''],
      class: ['', Validators.required],
      exam_type: ['', Validators.required],
      subject: ['', Validators.required],
      passing_makrs: ['', Validators.required],
      total_marks: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      admin_id_fk: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  

  onSubmit() {
    console.log(this.examinationForm.value);
    this._crud.addExamination(this.examinationForm.value).subscribe(
      (res: Examinations) => {
        console.log(res);
        this.matref.close()
        this.toastr.success('Exam added successfully', 'Success')
      },
      (err: Error) => {
        this.toastr.error('Please check your internet connection', 'Error')
      }
    )
  }


  resetForm() {
    this.examinationForm.reset();
  }

  onChangeClass(event: MatSelectChange) {
    const cls = event.value
    console.log(cls)
    this._crud.getSubjectByClass(cls).subscribe(
      (res) => {
        console.log(res)
        this.subjectList = res.data
      }
    )
  }

}
