import { Component, OnInit } from '@angular/core';
import { link } from 'fs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  linkedInURL!: string;
  gitHubURL!: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    let biodata: any;
    this.sharedService.fetchData('biodata').subscribe((data) => {
      biodata = data;
    });
    setTimeout(() => {
      this.fetchSMLinks(biodata[0]);
    }, 150);
  }

  fetchSMLinks(footer: any) {
    let footerData = footer[2].Value[0].Value[0];
    this.linkedInURL = footerData[0].Value;
    this.gitHubURL = footerData[1].Value;
  }
}
