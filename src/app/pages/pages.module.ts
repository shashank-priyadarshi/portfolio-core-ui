import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { ArticlesComponent } from './articles/articles.component';
import { MaterialModule } from '../material/material.module';
import { ModalModule } from '../modal/modal.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, TodosComponent, ArticlesComponent],
  imports: [CommonModule, MaterialModule, ModalModule, SharedModule],
})
export class PagesModule {}
