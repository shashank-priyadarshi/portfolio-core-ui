import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.sass'],
})
export class UnderConstructionComponent implements OnInit {
  @Input() progressValue: number = 5;

  constructor() {}

  ngOnInit(): void {}
}
