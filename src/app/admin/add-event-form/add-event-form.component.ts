import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent {

  eventForm!: FormGroup

  constructor(
    private _fb:FormBuilder
  ){
    this.eventForm = this._fb.group({
      ocassion_name:['', Validators.required],
      date:['', Validators.required]
    })
  }


  resetForm(){
    this.eventForm.reset() 
  }

}
