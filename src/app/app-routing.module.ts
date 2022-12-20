import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TechBlogComponent } from './tech-blog/tech-blog.component';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'techblog', component: TechBlogComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '**', component: PageNotExistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
