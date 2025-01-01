import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StdLoginPageComponent } from './std-login-page/std-login-page.component';


@NgModule({
  declarations: [
    StdLoginPageComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
