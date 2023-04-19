import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
// import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass'],
})
export class ChartComponent implements OnInit {
  @Input() gitHubData: any;

  // Chart variables
  multi!: any[];
  view = [600, 300] as [number, number];
  // options
  showXAxis: boolean = true;
  gradient: boolean = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#ffd700', '#1b7e48'],
    name: "",
    selectable: false,
    group: {} as ScaleType,
  };

  constructor() {
    this.getScreenSize();
  }

  async ngOnInit() {
    await this.gitHubData;
    this.gitHubData.then((response: any) => {
      this.multi = response;
      Object.assign(this, { response });
    });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.view = [window.innerWidth / 2.15, window.innerHeight / 2.15] as [
      number,
      number
    ];
  }
}
