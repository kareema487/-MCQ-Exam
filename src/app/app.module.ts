import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Modul/shared/shared.module';
import { AuthModule } from './Modul/auth/auth.module';
import { ViewModule } from './Modul/view/view.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExamModule } from './Modul/exam/exam.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    ViewModule,
    FormsModule,
    HttpClientModule,
    ExamModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
