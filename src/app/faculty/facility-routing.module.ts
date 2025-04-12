import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { FacultyHomePageComponent } from './faculty-home-page/faculty-home-page.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { AssignBtchComponent } from './assign-btch/assign-btch.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ExamTestsComponent } from './exam-tests/exam-tests.component';
import { FtfeestructureComponent } from './ftfeestructure/ftfeestructure.component';
import { FtassignmentComponent } from './ftassignment/ftassignment.component';
import { FtsyllabusComponent } from './ftsyllabus/ftsyllabus.component';
import { FtholidaysComponent } from './ftholidays/ftholidays.component';

const routes: Routes = [
  { path: '', component: FacultyLoginComponent },
  {
    path: 'faculty_homepage',
    component: FacultyHomePageComponent,

    children: [
      { path: '', component: FacultyDashboardComponent },
      { path: 'ft_dashboard', component: FacultyDashboardComponent },
      { path: 'ft_attendance', component: AttendanceComponent },
      { path: 'assigned_batch', component: AssignBtchComponent },
      { path: 'ft_exam', component: ExamTestsComponent },
      { path: 'ftfeestr', component: FtfeestructureComponent },
      { path: 'ftassignment', component: FtassignmentComponent },
      { path: 'ftsyllabus', component: FtsyllabusComponent },
      { path: 'ftholidays', component: FtholidaysComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilityRoutingModule { }
