import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private _fb: FormBuilder
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
    console.log(this.subjectForm.value);
  }

}
