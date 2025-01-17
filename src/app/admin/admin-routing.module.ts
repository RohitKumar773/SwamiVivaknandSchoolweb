import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { FacultiesComponent } from './faculties/faculties.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  { path: 'admin_login', component: AdminLoginComponent },

  {
    path: 'home',
    component: AdminHomePageComponent,

    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'registrations', component: RegistrationsComponent },
      { path: 'faculty', component: FacultiesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
