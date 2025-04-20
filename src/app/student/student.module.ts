import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StdLoginPageComponent } from './std-login-page/std-login-page.component';
import { StdHomepageComponent } from './std-homepage/std-homepage.component';
import { StdDashboardComponent } from './std-dashboard/std-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AssignmentsComponent } from './assignments/assignments.component';
import { StdFeeStructureComponent } from './std-fee-structure/std-fee-structure.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { StdProfileComponent } from './std-profile/std-profile.component';
import { StdExamComponent } from './std-exam/std-exam.component';
import { StdAttendanceComponent } from './std-attendance/std-attendance.component';
import { StdFeedbackComponent } from './std-feedback/std-feedback.component';
import { StdHolidayComponent } from './std-holiday/std-holiday.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { UpdateStdPasswordComponent } from './update-std-password/update-std-password.component';

@NgModule({
  declarations: [
    StdLoginPageComponent,
    StdHomepageComponent,
    StdDashboardComponent,
    AssignmentsComponent,
    StdFeeStructureComponent,
    SyllabusComponent,
    StdProfileComponent,
    StdExamComponent,
    StdAttendanceComponent,
    StdFeedbackComponent,
    StdHolidayComponent,
    UpdateStdPasswordComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
