import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-course-applcation',
  templateUrl: './course-applcation.component.html',
  styleUrls: ['./course-applcation.component.scss'],
})
export class CourseApplcationComponent {
  constructor(private dialog: MatDialog) {}

  add_new_std() {
    this.dialog.open(RegistrationFormComponent, {
      disableClose: true,
    });
  }

  delete_application(){
    this.dialog.open(ConfirmBoxComponent,{
      disableClose:true,
    })
  }
}
