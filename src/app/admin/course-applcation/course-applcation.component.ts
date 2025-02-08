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
   data = [
    { id: 1, name: "Rohit Kumar", class: "LKG", location: "Hajipur" },
    { id: 2, name: "Jacob", class: "Thornton", location: "raj" },
    { id: 3, name: "Larry", class: "the Bird", location: "rajesh" },
    { id: 4, name: "Mark", class: "Otto", location: "rohit" },
    { id: 5, name: "Jacob", class: "Thornton", location: "raj" },
    { id: 6, name: "Larry", class: "the Bird", location: "rajesh" },
    { id: 7, name: "Mark", class: "Otto", location: "rohit" },
    { id: 8, name: "Jacob", class: "Thornton", location: "raj" },
    { id: 9, name: "Larry", class: "the Bird", location: "rajesh" },
    { id: 10, name: "Mark", class: "Otto", location: "rohit" },
    { id: 11, name: "Jacob", class: "Thornton", location: "raj" },
    { id: 12, name: "Larry", class: "the Bird", location: "rajesh" }
  ];
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
