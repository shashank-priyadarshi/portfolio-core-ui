import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActivate, Router, RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { Title } from '@angular/platform-browser';
import { AuthGuard } from '../auth/auth.guard';
import { PolicyComponent } from './policy/policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'policies', component: PolicyComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
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
