import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ChartComponent } from './chart/chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './home/about/about.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ActivityComponent } from './home/activity/activity.component';
import { PolicyComponent } from './policy/policy.component';

@NgModule({
  declarations: [
    HomeComponent,
    ArticlesComponent,
    ChartComponent,
    AboutComponent,
    ProjectsComponent,
    ActivityComponent,
    PolicyComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PagesRoutingModule,
  ],
})
export class PagesModule {}
