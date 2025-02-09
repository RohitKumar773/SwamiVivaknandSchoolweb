import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MatIconModule } from '@angular/material/icon';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomepageComponent,
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class WebsiteModule {
  constructor(){
    console.log('website is lodeed');
    
  }
 }
