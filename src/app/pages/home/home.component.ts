import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Biodata } from 'src/assets/models/models.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  @ViewChild('resume')
  resume!: TemplateRef<any>;
  headerDetails!: string;
  name!: string;
  currentYear!: number;
  linkedInURL!: string;
  gitHubURL!: string;
  mediumURL!: string;
  hashnodeURL!: string;
  noResponse: boolean = false;

  constructor(
    private matDialog: MatDialog,
    private viewportRuler: ViewportRuler,
    private title: Title
  ) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.title.setTitle('Home');
    let biodataString = localStorage.getItem('biodata');
    let biodata: Biodata;
    if (biodataString) {
      biodata = JSON.parse(biodataString) as Biodata;
    } else {
      this.name = 'UNDEFINED';
      this.headerDetails = 'Asuvidha ke liye khed hai!';
      return;
    }
    this.fetchDetails(biodata);
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

  calculateExperience(dojdata: string) {
    return new Date().getTime() - new Date(dojdata).getTime();
  }

  fetchDetails(biodata: Biodata) {
    this.name = biodata.name;
    this.headerDetails =
      biodata.role +
      ' | ' +
      (this.calculateExperience(biodata.doj) / 31557600000).toFixed(2) +
      ' years';
  }

  fetchSMLinks(biodata: Biodata) {
    this.linkedInURL = biodata.linkedin;
    this.gitHubURL = biodata.github;
    this.mediumURL = biodata.medium;
    this.hashnodeURL = biodata.hashnode;
  }

  loadIFrame() {
    const viewportSize = this.viewportRuler.getViewportSize();
    const height = Math.max(viewportSize.height * 0.8, 400) + 'px'; // set minimum height to 400px
    const width = Math.max(viewportSize.width * 0.8, 600) + 'px'; // set minimum width to 600px
    this.matDialog.open(this.resume, {
      height: height,
      width: width,
    });
  }
}
