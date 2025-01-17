import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StdLoginPageComponent } from './std-login-page/std-login-page.component';
import { StdHomepageComponent } from './std-homepage/std-homepage.component';
import { StdDashboardComponent } from './std-dashboard/std-dashboard.component';


@NgModule({
  declarations: [
    StdLoginPageComponent,
    StdHomepageComponent,
    StdDashboardComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
