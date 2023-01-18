import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
})
export class TodosComponent implements OnInit {
  message: string = 'You are not authorized to perform this action!';
  action: string = 'Dismiss';
  todoList!: Array<any>;
  snackBar!: boolean;
  dataLoaded: boolean = false;
  constructor(
    private sharedSvc: SharedService,
    public matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.sharedSvc.fetchData('todos').subscribe((data) => {
      this.todoList = data;
      this.dataLoaded = true;
    });
  }
  initSnackBar(event: any) {
    this.matSnackBar.open(this.message, this.action, {
      duration: 3000,
    });
    event.target.checked = !event.target.checked;
  }
}
