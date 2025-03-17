import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService
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
    this.getSubject()
  }

  getSubject() {
    this._crud.getSubject().subscribe(
      (res: SubjectRes) => {
        console.log(res);
        if (res.success) {
          if(Array.isArray(res.data)){
            // this.subjectList = res.data
          }
        }
      },
      (err: Error) => {
        console.log(err);

      }
    )
  }

  onSubmit() {
    if (this.examinationForm.valid) {
      const formdata = new FormData();
      formdata.append('id', this.examinationForm.get('id')?.value);
      formdata.append('class', this.examinationForm.get('class')?.value);
      formdata.append('exam_type', this.examinationForm.get('exam_type')?.value);
      formdata.append('subject', this.examinationForm.get('subject')?.value);
      formdata.append('passing_makrs', this.examinationForm.get('passing_makrs')?.value);
      formdata.append('total_marks', this.examinationForm.get('total_marks')?.value);
      formdata.append('date', this.examinationForm.get('total_marks')?.value);
      formdata.append('time', this.examinationForm.get('total_marks')?.value);
      formdata.append('admin_id_fk', this.examinationForm.get('total_marks')?.value)

    //   this._crud.addExamination(formdata).subscribe((res: Examinations) => {
    //     console.log(res);
    //   })

    // } else {
    //   this.toastr.warning('Please Fill all the Required fields', 'Warning')
    // }

  }
  }

  resetForm() {
    this.examinationForm.reset();
  }

}
