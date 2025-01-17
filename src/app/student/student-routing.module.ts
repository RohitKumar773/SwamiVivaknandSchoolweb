import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StdLoginPageComponent } from './std-login-page/std-login-page.component';
import { StdHomepageComponent } from './std-homepage/std-homepage.component';

const routes: Routes = [
  { path: '', component: StdLoginPageComponent },
  { path: 'std_homepage', component: StdHomepageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
