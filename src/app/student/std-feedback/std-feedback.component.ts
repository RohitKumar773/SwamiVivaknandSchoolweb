import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-std-feedback',
  templateUrl: './std-feedback.component.html',
  styleUrls: ['./std-feedback.component.scss']
})
export class StdFeedbackComponent {
  feedbackForm!: FormGroup;
  stdLogin: any
  stdLoginData: any

  constructor(
    private _crud: CrudService,
    private _fb: FormBuilder,
    private toastr: ToastrService
  ){
    this.stdLogin = localStorage.getItem('studentLoginData')
    this.stdLoginData = JSON.parse(this.stdLogin)



    this.feedbackForm = this._fb.group({
      title:['', Validators.required],
      description:['', Validators.required],
      std_id:[this.stdLoginData.id]
    })
  }

  onSubmit(){
    if(this.feedbackForm.valid){
      this._crud.addFeedback(this.feedbackForm.value).subscribe(
        (res: any)=>{
          this.toastr.success('Thank you for your suggestion!', 'Thank you!');
          this.feedbackForm.reset()
        },
        (err: Error) => {
          this.toastr.error('Please check your internet connection')
        }
      )
    }else{
      this.toastr.warning('Please fill all required fields', 'Warning')
    }
  }

}
