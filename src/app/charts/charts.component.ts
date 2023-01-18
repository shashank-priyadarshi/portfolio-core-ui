import { Component, OnInit } from '@angular/core';
import { single, multi } from './data';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.sass'],
})
export class ChartsComponent implements OnInit {
  single!: any[];
  multi!: any[];

  constructor() {
    Object.assign(this, { single, multi });
  }

  ngOnInit(): void {}
}
