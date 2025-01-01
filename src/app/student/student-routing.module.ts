import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StdLoginPageComponent } from './std-login-page/std-login-page.component';

const routes: Routes = [
  { path: '', component: StdLoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
