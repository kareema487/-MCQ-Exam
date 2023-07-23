import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionsComponent } from './Component/instructions/instructions.component';
import { QuestionComponent } from './Component/question/question.component';
import { SummaryComponent } from './Component/summary/summary.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ViewRoutingModule } from '../view/view-routing.module';

@NgModule({
  declarations: [
    InstructionsComponent,
    QuestionComponent,
    SummaryComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ViewRoutingModule
  ]
})
export class ExamModule { }
