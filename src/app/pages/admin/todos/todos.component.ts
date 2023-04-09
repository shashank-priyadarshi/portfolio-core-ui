import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Common } from 'src/assets/models/models.interface';
import { PagesService } from '../../home/pages.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
})
export class TodosComponent extends PagesService {
  message: string = 'Action not enabled!';
  action: string = 'Dismiss';
  todoList!: Common[];
  snackBar!: boolean;
  dataLoaded: boolean = false;
  constructor(public matSnackBar: MatSnackBar, private httpclient: HttpClient) {
    super(httpclient);
  }

  ngOnInit() {
    let todosString: string = localStorage.getItem('todos') as string;
    if (todosString) {
      this.todoList = JSON.parse(todosString) as Common[];
      this.dataLoaded = true;
      return;
    } else {
      this.fetchtodos();
      todosString = localStorage.getItem('todos') as string;
      this.todoList = JSON.parse(todosString) as Common[];
      this.dataLoaded = true;
      // window.open(
      //   'https://github.com/shashank-priyadarshi/MyFiles/blob/main/server_crash.jpg?raw=true',
      //   '_self'
      // );
      return;
    }
  }

  fetchtodos() {
    this.postData('todos', '').subscribe((data) => {
      let todos: Common[] = [];
      data.issues.forEach((element: string) => {
        let lastIndex: number = element.lastIndexOf(',');
        todos.push({
          title: element.slice(0, lastIndex),
          url: element.slice(lastIndex + 1),
        });
      });
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  }

  initSnackBar(event: any) {
    this.matSnackBar.open(this.message, this.action, {
      duration: 3000,
    });
    event.target.checked = !event.target.checked;
    event.preventDefault();
  }
}
