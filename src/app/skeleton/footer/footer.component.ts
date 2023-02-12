import { Component, OnInit } from '@angular/core';
import { Biodata } from 'src/assets/models/models.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  linkedInURL!: string;
  gitHubURL!: string;
  noResponse: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let biodataString = localStorage.getItem('biodata');
    let biodata: Biodata;
    if (biodataString) {
      biodata = JSON.parse(biodataString) as Biodata;
    } else {
      this.linkedInURL =
        'https://github.com/shashank-priyadarshi/MyFiles/blob/main/server_crash.jpg?raw=true';
      this.gitHubURL =
        'https://github.com/shashank-priyadarshi/MyFiles/blob/main/server_crash.jpg?raw=true';
      return;
    }
    this.fetchSMLinks(biodata);
  }

  fetchSMLinks(biodata: Biodata) {
    this.linkedInURL = biodata.linkedin;
    this.gitHubURL = biodata.github;
  }
}
