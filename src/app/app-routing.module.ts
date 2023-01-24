import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  { path: '**', component: PagesModule },
  // { path: 'todos', component: TodosComponent },
  // { path: 'techblog', component: TechBlogComponent },
  // { path: 'calendar', component: CalendarComponent },
  // { path: '**', component: PageNotExistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
