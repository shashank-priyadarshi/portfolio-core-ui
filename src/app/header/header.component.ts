import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  headerDetails!: string;
  startTime!: string;
  name!: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.fetchData('biodata').subscribe(async (data) => {
      await data;
      this.calculateExperience(data[0]);
      this.fetchDetails(data[0]);
    });
  }

  calculateExperience(dojdata: any) {
    // let previousEmployer = doj[3].Value[4].Value;
    // if (!previousEmployer.length) {
    //   this.startTime = doj[3].Value[4].Value[0].Value[2];
    // }
    this.startTime = dojdata[3].Value[4].Value[0].Value[2];
    return new Date().getTime() - new Date(this.startTime).getTime();
  }

  fetchDetails(biodata: any) {
    let header = biodata[1].Value;
    this.name = header[0].Value;
    let role = header[1].Value;
    this.headerDetails =
      role[0] +
      ' | ' +
      role[1] +
      ' | ' +
      (this.calculateExperience(biodata) / 31557600000).toFixed(2) +
      ' years';
  }
}
