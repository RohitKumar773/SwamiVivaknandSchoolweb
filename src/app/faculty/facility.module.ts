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


@NgModule({
  declarations: [
    FacultyLoginComponent,
    FacultyHomePageComponent,
    FacultyDashboardComponent,
    AttendanceComponent,
    AssignBtchComponent,
    ExamTestsComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class FacilityModule { }
