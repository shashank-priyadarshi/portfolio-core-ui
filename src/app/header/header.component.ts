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

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    let biodata: any;
    this.sharedService.fetchData('biodata').subscribe((data) => {
      biodata = data;
    });
    setTimeout(() => {
      this.calculateExperience(biodata[0]);
      this.fetchDetails(biodata[0]);
    }, 100);
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
    let name = header[0].Value;
    let role = header[1].Value;
    this.headerDetails =
      name +
      ' | ' +
      role[0] +
      ' | ' +
      role[1] +
      ' | ' +
      (this.calculateExperience(biodata) / 31557600000).toFixed(2) +
      ' years';
  }
}
