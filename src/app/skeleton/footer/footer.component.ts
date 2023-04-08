import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Biodata } from 'src/assets/models/models.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  @ViewChild('resume')
  resume!: TemplateRef<any>;
  linkedInURL!: string;
  gitHubURL!: string;
  mediumURL!: string;
  hashnodeURL!: string;
  noResponse: boolean = false;

  constructor(
    private matDialog: MatDialog,
    private viewportRuler: ViewportRuler
  ) {}

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
