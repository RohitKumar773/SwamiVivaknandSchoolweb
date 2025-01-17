import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { FacultyHomePageComponent } from './faculty-home-page/faculty-home-page.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';


@NgModule({
  declarations: [
    FacultyLoginComponent,
    FacultyHomePageComponent,
    FacultyDashboardComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule
  ]
})
export class FacilityModule { }
