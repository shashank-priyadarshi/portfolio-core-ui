import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TechBlogComponent } from './tech-blog/tech-blog.component';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'techblog', component: TechBlogComponent },
  { path: '**', component: PageNotExistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
