import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MatIconModule } from '@angular/material/icon';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ReactiveFormsModule } from '@angular/forms';
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
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    NgbCarouselModule,
    MatCardModule
  ]
})
export class WebsiteModule {
  constructor() {
    console.log('website is lodeed');

  }
}
