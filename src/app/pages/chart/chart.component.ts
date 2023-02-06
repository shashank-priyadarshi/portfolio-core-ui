import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';
import { SharedService } from 'src/app/shared.service';

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
  } as string | Color;

  constructor(private sharedService: SharedService) {}

  async ngOnInit() {
    await this.gitHubData;
    this.gitHubData.then((response: any) => {
      this.multi = response;
      Object.assign(this, { response });
    });
  }
}
