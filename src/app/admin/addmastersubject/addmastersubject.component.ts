import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SubjectRes } from 'src/app/interface/subject.interface';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-addmastersubject',
  templateUrl: './addmastersubject.component.html',
  styleUrls: ['./addmastersubject.component.scss']
})
export class AddmastersubjectComponent {
  subjectForm!: FormGroup
  class: any[] = [];
  admin = 1;

  constructor(
    private _shared: SharedService,
    private _fb: FormBuilder,
    private _crud:CrudService,
    private matref: MatDialogRef<AddmastersubjectComponent>,
    private toastr:ToastrService
  ) {
    this._shared.classList.subscribe(
      (cls) => {
        this.class = cls
      }
    )


    this.subjectForm = this._fb.group({
      id:[''],
      class:['', Validators.required],
      subject_name:['', Validators.required],
      admin_id_fk:['', Validators.required]
    })
  }

  resetForm() { }
  onSubmit() { 
    this._crud.addSubject(this.subjectForm.value).subscribe(
      (res:SubjectRes) => {
        console.log(res);
        if(res.success){
          console.log(res);
          this.matref.close();
          this.toastr.success('Subject added Successfully', 'Success')
        }else{
          alert('error')
          this.toastr.error('Subject not added', 'Error')
        }
      },
      (err:Error) => {
        this.toastr.error('Subject not added', 'Error')
        console.log(err);
        
      }
    )
  }

}
