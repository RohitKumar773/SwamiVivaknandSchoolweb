import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MatIconModule
  ]
})
export class WebsiteModule {
  constructor(){
    console.log('website is lodeed');
    
  }
 }
