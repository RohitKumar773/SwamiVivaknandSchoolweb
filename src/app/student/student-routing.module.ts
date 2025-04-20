import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StdLoginPageComponent } from './std-login-page/std-login-page.component';
import { StdHomepageComponent } from './std-homepage/std-homepage.component';
import { StdDashboardComponent } from './std-dashboard/std-dashboard.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { StdFeeStructureComponent } from './std-fee-structure/std-fee-structure.component';
import { StdExamComponent } from './std-exam/std-exam.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { StdProfileComponent } from './std-profile/std-profile.component';
import { StdAttendanceComponent } from './std-attendance/std-attendance.component';
import { StdFeedbackComponent } from './std-feedback/std-feedback.component';
import { StdHolidayComponent } from './std-holiday/std-holiday.component';
import { UpdateStdPasswordComponent } from './update-std-password/update-std-password.component';

const routes: Routes = [
  { path: '', component: StdLoginPageComponent },
  {
    path: 'std_homepage',
    component: StdHomepageComponent,

    children: [
      { path: '', component: StdDashboardComponent },
      { path: 'std_dashboard', component: StdDashboardComponent },
      { path: 'assignments', component: AssignmentsComponent },
      { path: 'fee_structure', component: StdFeeStructureComponent },
      { path: 'std_exams', component: StdExamComponent },
      { path: 'syllabus', component: SyllabusComponent },
      { path: 'std_profile', component: StdProfileComponent },
      { path: 'attendance', component: StdAttendanceComponent },
      { path: 'std_feedback', component: StdFeedbackComponent },
      { path: 'std_holiday', component: StdHolidayComponent },
      { path: 'stdpwdupdate', component: UpdateStdPasswordComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule { }
