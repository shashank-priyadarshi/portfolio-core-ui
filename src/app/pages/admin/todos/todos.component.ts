import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Common } from 'src/assets/models/models.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
})
export class TodosComponent {
  message: string = 'Action not enabled!';
  action: string = 'Dismiss';
  todoList!: Common[];
  snackBar!: boolean;
  dataLoaded: boolean = false;
  constructor(public matSnackBar: MatSnackBar) {}

  ngOnInit() {
    let todosString: string = localStorage.getItem('todos') as string;
    if (todosString) {
      this.todoList = JSON.parse(todosString) as Common[];
      this.dataLoaded = true;
      return;
    } else {
      // window.open(
      //   'https://github.com/shashank-priyadarshi/MyFiles/blob/main/server_crash.jpg?raw=true',
      //   '_self'
      // );
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
