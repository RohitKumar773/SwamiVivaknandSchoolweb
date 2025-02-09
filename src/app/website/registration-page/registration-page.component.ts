import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegRes } from 'src/app/interface/studentReg.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  studentRegistrationForm!: FormGroup;

  constructor(private _rg: FormBuilder, private _crud: CrudService) {
    this.studentRegistrationForm = this._rg.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      father_name: ['', Validators.required],
      mother_name: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.studentRegistrationForm.value);

    if (this.studentRegistrationForm.valid) {
      this._crud.std_self_reg(this.studentRegistrationForm.value).subscribe(
        (result: RegRes) => {
          console.log(result);
          if (result.success == 1) {
            alert(result.message);
          } else {
            alert(result.message);
          }
        },
        (err: Error) => {
          console.log(err);
          alert(err.message);
        }
      );
    } else {
      alert('Please fill all the required filed');
    }
  }
}
