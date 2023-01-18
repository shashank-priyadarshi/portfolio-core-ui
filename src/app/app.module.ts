import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { TechBlogComponent } from './tech-blog/tech-blog.component';
import { TodosComponent } from './todos/todos.component';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';
import { HomeComponent } from './home/home.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChartsComponent } from './charts/charts.component';
import { IframeComponent } from './iframe/iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    TechBlogComponent,
    TodosComponent,
    PageNotExistComponent,
    HomeComponent,
    UnderConstructionComponent,
    ProgressSpinnerComponent,
    SnackBarComponent,
    CalendarComponent,
    ChartsComponent,
    IframeComponent,

    // DpDatePickerModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      // { path: 'newsletter', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    ]),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // NgxChartsModule,
    MaterialModule,
    FormsModule,
  ],
  // exports: [AuthModule, FormModule],
  // providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
