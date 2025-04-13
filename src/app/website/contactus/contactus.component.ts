import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  contactForm!: FormGroup

  constructor(
    private _crud: CrudService,
    private _toastr: ToastrService,
    private _fb: FormBuilder
  ){
    this.contactForm = this._fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required],
      subject:['', Validators.required],
      description:['', Validators.required]
    })
  }

  onSendEmail(){
    if(this.contactForm.valid){
      this._crud.sendEmail(this.contactForm.value).subscribe(
        (res: any) => {
          console.log(res);
          this._toastr.success('Your message sent successfully', 'Thank you!');
          this.contactForm.reset()
        },
        (err: Error) => {
          this._toastr.error('Please check your internet connection', 'Internet error')
        }
      )
    }else{
      this._toastr.warning('Please fill all required fields');
    }
  }
 
}
