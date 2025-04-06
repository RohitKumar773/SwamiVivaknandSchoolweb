import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
// import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdmissionComponent } from './admission/admission.component';
import { OurEventComponent } from './our-event/our-event.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AcademicsComponent } from './academics/academics.component';

const routes: Routes = [

  {
    path: '', component: HomepageComponent,

    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'aboutus', component: AboutUsComponent
      },
      { path: 'contact', component: ContactusComponent },
      { path: 'admission', component: AdmissionComponent },
      { path: 'ourevent', component: OurEventComponent },
      { path: 'noticeboard', component: NoticeBoardComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'academics', component: AcademicsComponent }
    ]
  }

  // { path: '', redirectTo: 'homepage', pathMatch: 'full' ,
  //   children: [
  //     { path: '', component: IndexpageComponent }
  //   ]
  // },
  // {
  //   path: 'homepage', component: HomepageComponent,


  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
