import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FacilityRoutingModule } from './facility-routing.module';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { FacultyHomePageComponent } from './faculty-home-page/faculty-home-page.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AssignBtchComponent } from './assign-btch/assign-btch.component';
import { ExamTestsComponent } from './exam-tests/exam-tests.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FtassignmentComponent } from './ftassignment/ftassignment.component';
import { FtfeestructureComponent } from './ftfeestructure/ftfeestructure.component';
import { FtholidaysComponent } from './ftholidays/ftholidays.component';
import { FtsyllabusComponent } from './ftsyllabus/ftsyllabus.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    FacultyLoginComponent,
    FacultyHomePageComponent,
    FacultyDashboardComponent,
    AttendanceComponent,
    AssignBtchComponent,
    ExamTestsComponent,
    FtassignmentComponent,
    FtfeestructureComponent,
    FtholidaysComponent,
    FtsyllabusComponent,
    AssignmentFormComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class FacilityModule { }
