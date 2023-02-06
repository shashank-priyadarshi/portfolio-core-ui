import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';

const routes: Routes = [
  // { path: '', component: PageNotExistComponent },
  // { path: '**', component: PageNotExistComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
