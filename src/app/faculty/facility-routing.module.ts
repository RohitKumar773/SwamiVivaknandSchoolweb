import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { FacultyHomePageComponent } from './faculty-home-page/faculty-home-page.component';

const routes: Routes = [
  { path: '', component: FacultyLoginComponent },
  { path: 'faculty_homepage', component: FacultyHomePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilityRoutingModule {}
