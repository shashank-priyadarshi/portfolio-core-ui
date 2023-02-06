import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Common } from 'src/assets/models/models.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
})
export class TodosComponent implements OnInit {
  message: string = 'You are not authorized to perform this action!';
  action: string = 'Dismiss';
  todoList!: Common[];
  snackBar!: boolean;
  dataLoaded: boolean = false;
  constructor(public matSnackBar: MatSnackBar, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Todos');
    let todosString: string = localStorage.getItem('todos') as string;
    if (todosString) {
      this.todoList = JSON.parse(todosString) as Common[];
      console.log(this.todoList);
      this.dataLoaded = true;
      return;
    }
  }
  initSnackBar(event: any) {
    this.matSnackBar.open(this.message, this.action, {
      duration: 3000,
    });
    event.target.checked = !event.target.checked;
    event.preventDefault();
  }
}
