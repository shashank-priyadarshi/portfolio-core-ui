import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { CalendarComponent } from 'src/app/modal/calendar/calendar.component';
import { ResumeComponent } from 'src/app/modal/resume/resume.component';
import { SharedService } from 'src/app/shared.service';

interface Repo {
  name: string;
  link: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  openIssues: string[] = [];
  starredRepos: Repo[] = [];
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
      console.log(data);
    });
  }
}
