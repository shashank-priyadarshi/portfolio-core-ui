import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AuthModule } from './auth/auth.module';
import { FormModule } from './form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'newsletter', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    ]),
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    FormModule,
  ],
  exports: [AuthModule, FormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
