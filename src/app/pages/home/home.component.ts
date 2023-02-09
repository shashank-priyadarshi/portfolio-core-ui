import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { CalendarComponent } from 'src/app/modal/calendar/calendar.component';
import { ResumeComponent } from 'src/app/modal/resume/resume.component';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SCMData, SCMActivity } from 'src/assets/models/models.interface';

interface chartData {
  name: string;
  series: series[];
}

interface series {
  name: string;
  value: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  openIssues: string[] = [];
  starredRepos: any;
  starredRepoTooltip: string = '';
  openIssueTooltip: string = '';
  repoData: any;
  repoDataPromise = false;
  showStarredRepos: boolean = false;
  linkedIn: string = 'https://linkedin.com/in/aman-kumar-verma';
  githubOrg: string = 'https://github.com/Ecommerce-Clone/Core-UI';
  portfolioRepo: string =
    'https://github.com/shashank-priyadarshi/portfolio-core-ui/';
  constructor(
    private matDialog: MatDialog,
    private title: Title,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Home');
    let githubdatastring: string = sessionStorage.getItem(
      'githubdata'
    ) as string;
    if (githubdatastring) {
      let githubdata = JSON.parse(githubdatastring) as SCMData;
      this.parseGitHubData(githubdata);
    }
  }

  parseGitHubData(githubdata: SCMData) {
    let prDataList: series[] = [];
    let commitDataList: series[] = [];
    this.starredRepoTooltip = githubdata.starredRepoCount + ' Starred Repos';
    this.openIssueTooltip = githubdata.openIssueCount + ' Open Issues';
    // this.starredRepos = githubdata.list;
    githubdata.scmActivity.forEach((element: SCMActivity) => {
      prDataList.push(<series>{
        name: element.date.slice(0, 11),
        value: element.pr,
      });
      commitDataList.push(<series>{
        name: element.date.slice(0, 11),
        value: element.commits,
      });
    });
    this.repoData = new Promise((resolve) => {
      resolve([
        <chartData>{
          name: 'Pull Requests',
          series: prDataList,
        },
        <chartData>{
          name: 'Commits',
          series: commitDataList,
        },
      ]);
      this.repoDataPromise = true;
    });
  }

  loadIFrame() {
    this.matDialog.open(ResumeComponent, {
      height: '600px',
      width: '1200px',
    });
  }

  loadCallSchedule() {
    // this.matDialog.open(CalendarComponent);
    this.snackBar.open("This action hasn't been enabled yet!", 'OK', {
      duration: 3000,
    });
  }
}
