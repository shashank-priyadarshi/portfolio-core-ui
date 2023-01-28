import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActivate, Router, RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'articles', component: ArticlesComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule implements CanActivate {
  constructor(private title: Title, private router: Router) {}
  canActivate() {
    const title =
      this.router.url === '' || this.router.url === '/home'
        ? 'Home'
        : this.router.url === '/todos'
        ? 'Todos'
        : 'Articles';
    this.title.setTitle(title);
    return true;
  }
}
