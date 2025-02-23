import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Events } from 'src/app/interface/event.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent {
  eventForm!: FormGroup
  admin = 1;

  constructor(
    private _fb: FormBuilder,
    private _crud: CrudService,
    private matref: MatDialogRef<AddEventFormComponent>
  ) {
    this.eventForm = this._fb.group({
      id: [''],
      ocassion_name: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      admin_id_fk: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const formData = new FormData();
      formData.append('ocassion_name', this.eventForm.get('ocassion_name')?.value);
      formData.append('start_date', this.eventForm.get('start_date')?.value);
      formData.append('end_date', this.eventForm.get('end_date')?.value);
      formData.append('admin_id_fk', this.eventForm.get('admin_id_fk')?.value);

      this._crud.addEvent(this.eventForm.value).subscribe(
        (res: Events) => {
          console.log(res);
          this.matref.close()
        },
        (err: Error) => {
          console.log(err);
          alert('Data not inserted')
        }
      )
    }
    else {
      alert('Please fill all the required fields')
    }
  }

  resetForm() {
    this.eventForm.reset()
  }
}