import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.sass']
})

export class ChartsComponent {
  selectedOption: string = "";
  chartSrcOptions = [
    { value: "categories", label: "Categories", source: "https://wakatime.com/share/@a6a86545-e882-487e-a007-4dcc8b053d30/70e78b12-d1ec-42c4-8fa2-5a7732bceb76.svg" },
    { value: "languages", label: "Languages", source: "https://wakatime.com/share/@a6a86545-e882-487e-a007-4dcc8b053d30/d2b1061a-9748-4152-bacb-e2d80d360a71.svg" },
    { value: "os", label: "OS", source: "https://wakatime.com/share/@a6a86545-e882-487e-a007-4dcc8b053d30/d7550462-9064-42f2-8cb1-bb2cd775b7f4.svg" },
    { value: "activity", label: "Coding Activity", source: "https://wakatime.com/share/@a6a86545-e882-487e-a007-4dcc8b053d30/c2aa8944-895a-4b4d-9f72-cff37f1fd0fa.svg" },
  ];

  constructor(private sanitizer: DomSanitizer) { }

  getSelectedOptionSrc(): SafeResourceUrl {
    const selected = this.chartSrcOptions.find(option => option.value === this.selectedOption);
    return this.sanitizer.bypassSecurityTrustResourceUrl(selected ? selected.source : "https://wakatime.com/share/@a6a86545-e882-487e-a007-4dcc8b053d30/70e78b12-d1ec-42c4-8fa2-5a7732bceb76.svg");
  }
}
