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
import { HomeComponent } from './home/home.component';
import { SkeletonModule } from './skeleton/skeleton.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

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
    SkeletonModule,
  ],
  // exports: [AuthModule, FormModule],
  // providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
