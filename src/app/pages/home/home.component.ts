import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { CalendarComponent } from 'src/app/modal/calendar/calendar.component';
import { ResumeComponent } from 'src/app/modal/resume/resume.component';
import { SharedService } from 'src/app/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  openIssues: string[] = [];
  starredRepos: any;
  repoData: any;
  repoDataPromise = false;
  constructor(
    private sharedService: SharedService,
    private matDialog: MatDialog,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Home');
    this.parseGitHubData();
  }

  loadIFrame() {
    this.matDialog.open(ResumeComponent, {
      height: '600px',
      width: '1200px',
    });
  }

  loadCallSchedule() {
    this.matDialog.open(CalendarComponent);
  }

  parseGitHubData() {
    this.sharedService.fetchData('githubdata').subscribe((data) => {
      this.repoData = new Promise((resolve) => {
        resolve(data);
        this.repoDataPromise = true;
      });
      let rawDataObj = data[0];
      this.starredRepos = rawDataObj[3].Value[1].Value;
      this.openIssues = rawDataObj[4].Value;
      console.log(data[0]);
      console.log(this.starredRepos);
    });
  }
}
