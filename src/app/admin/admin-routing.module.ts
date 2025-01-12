import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  { path: 'home', component: AdminHomePageComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
