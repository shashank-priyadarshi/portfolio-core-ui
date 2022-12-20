import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.sass'],
})
export class ProgressSpinnerComponent implements OnInit {
  @Input() showSpinner: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
