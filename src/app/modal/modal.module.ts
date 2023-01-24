import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { ResumeComponent } from './resume/resume.component';
import { IssuesComponent } from './issues/issues.component';
import { ReposComponent } from './repos/repos.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalendarComponent,
    ResumeComponent,
    IssuesComponent,
    ReposComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [
    CalendarComponent,
    ResumeComponent,
    IssuesComponent,
    ReposComponent,
  ],
})
export class ModalModule {}
