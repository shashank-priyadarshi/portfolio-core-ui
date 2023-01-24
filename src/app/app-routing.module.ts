import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
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
