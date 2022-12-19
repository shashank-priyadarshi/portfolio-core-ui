import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
})
export class TodosComponent implements OnInit {
  todoList!: Array<any>;
  constructor(private sharedSvc: SharedService) {}

  ngOnInit(): void {
    this.sharedSvc.fetchData('todos').subscribe((data) => {
      this.todoList = data;
    });
  }
}
