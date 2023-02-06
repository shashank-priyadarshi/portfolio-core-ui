import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

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
    this.sharedService.fetchData('biodata').subscribe(async (data) => {
      await data;
      this.fetchSMLinks(data[0]);
    });
  }

  fetchSMLinks(footer: any) {
    let footerData = footer[2].Value[0].Value[0];
    this.linkedInURL = footerData[0].Value;
    this.gitHubURL = footerData[1].Value;
  }
}
