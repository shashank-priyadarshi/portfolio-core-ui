import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  linkedInURL!: string;
  gitHubURL!: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.fetchSMLinks();
  }

  fetchSMLinks() {
    this.sharedService.getSharedData().subscribe((data) => {
      this.linkedInURL = data.footer.links[0].linkedin;
      this.gitHubURL = data.footer.links[0].github;
    });
  }

}
