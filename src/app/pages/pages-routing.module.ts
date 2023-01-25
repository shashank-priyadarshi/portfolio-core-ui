import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'articles', component: ArticlesComponent },
  {
    path: '**',
    loadChildren: () =>
      import('../shared/shared.module').then((m) => m.SharedModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
