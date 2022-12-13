import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  opened!: boolean;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.opened.subscribe((data) => {
      this.opened = data;
    });
  }
}
