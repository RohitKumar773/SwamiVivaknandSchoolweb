import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.scss']
})
export class AssignmentFormComponent implements OnInit {
  assignmentForm!: FormGroup;
  admin = 1
  classes: any
  login: any
  loginData: any

  constructor(
    private _crud: CrudService,
    private shared: SharedService,
    private _fb: FormBuilder,
    private _toastr: ToastrService,
    private dialog: MatDialogRef<AssignmentFormComponent>
  ) {
    this.login = localStorage.getItem('facultyLoginData')
    this.loginData = JSON.parse(this.login)

    this.assignmentForm = this._fb.group({
      id: [''],
      title: ['', Validators.required],
      class: ['', Validators.required],
      reference_url: [''],
      description: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
      deadline: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.shared.classList.subscribe(
      (res) => {
        this.classes = res
      }
    )
  }

  onSubmit() {
    if (this.assignmentForm.valid) {
      const formdata = new FormData();
      formdata.append('title', this.assignmentForm.get('title')?.value);
      formdata.append('class', this.assignmentForm.get('class')?.value);
      formdata.append('reference_url', this.assignmentForm.get('reference_url')?.value)
      formdata.append('description', this.assignmentForm.get('description')?.value);
      formdata.append('faculty_name', this.loginData.name);
      formdata.append('faculty_id', this.loginData.id);
      formdata.append('admin_id_fk', this.assignmentForm.get('admin_id_fk')?.value);
      const isoDate = new Date(this.assignmentForm.value.deadline).toISOString();
      formdata.append('deadline', isoDate);

      this._crud.addAssignemnt(formdata).subscribe(
        (res: any) => {
          this._toastr.success('Assignment Added Successfully', 'Success')
          this.dialog.close();
        },
        (err: Error) => {
          this._toastr.error('Failed to add assignment', 'Error')
        }
      )
    } else {
      this._toastr.warning('Please fill all required fields')
    }
  }
}
