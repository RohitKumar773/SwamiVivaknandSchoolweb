import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

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
}
