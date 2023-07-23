import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AppRoutingModule
  ],
  exports :[
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
