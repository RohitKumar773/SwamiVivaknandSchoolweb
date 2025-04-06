import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MatIconModule } from '@angular/material/icon';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { AdmissionComponent } from './admission/admission.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OurEventComponent } from './our-event/our-event.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { AcademicsComponent } from './academics/academics.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    HomepageComponent,
    RegistrationPageComponent,
    SliderComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ContactusComponent,
    AdmissionComponent,
    GalleryComponent,
    OurEventComponent,
    NoticeBoardComponent,
    AcademicsComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    NgbCarouselModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule
  ]
})
export class WebsiteModule {
  constructor() {
    console.log('website is lodeed');

  }
}
