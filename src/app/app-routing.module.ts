import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./website/website.module').then((w) => w.WebsiteModule),
  },
  {
    path: 'website',
    loadChildren: () =>
      import('./website/website.module').then((w) => w.WebsiteModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((a) => a.AdminModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((s) => s.StudentModule),
  },
  {
    path: 'faculty',
    loadChildren: () =>
      import('./faculty/facility.module').then((f) => f.FacilityModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
