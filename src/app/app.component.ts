import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import {
  Common,
  Biodata,
  SCMActivity,
  SCMData,
} from 'src/assets/models/models.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  openIssueCount!: number;
  // dataLoaded: boolean = false;
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.fetchBiodata();
    this.fetchtodos();
    this.fetchGithubdata();
    this.welcome();
  }

  fetchBiodata() {
    this.sharedService.fetchData('biodata').subscribe((data) => {
      let footer = data.footer[0].Value[0];
      let header = data.header;
      let role = header[1].Value;
      let biodata: Biodata = <Biodata>{
        name: header[0].Value,
        position: role[0],
        role: role[1],
        doj: role[2],
        linkedin: footer[0].Value,
        github: footer[1].Value,
      };
      localStorage.setItem('biodata', JSON.stringify(biodata));
    });
  }
  fetchGithubdata() {
    this.sharedService.fetchData('githubdata').subscribe((data) => {
      let starredRepos = data.starredrepos;
      let weekData = data.weekdata;
      let githubdata = <SCMData>{
        starredRepoCount: starredRepos[0].Value,
      };
      let list: Common[] = [];
      starredRepos[1].Value.forEach((element: string) => {
        let lastIndex: number = element.lastIndexOf(',');
        list.push(<Common>{
          title: element.slice(0, lastIndex),
          url: element.slice(lastIndex + 1),
        });
      });
      githubdata.list = list;
      let activity: SCMActivity[] = [];
      weekData.forEach((element: { key: string; Value: number }[]) => {
        activity.push(<SCMActivity>{
          pr: element[0].Value,
          loc: element[1].Value,
          date: element[2].Value,
          commits: element[3].Value,
        });
      });
      githubdata.scmActivity = activity;
      githubdata.openIssueCount = this.openIssueCount;
      localStorage.setItem('githubdata', JSON.stringify(githubdata));
    });
  }
  fetchtodos() {
    this.sharedService.postData('todos', '').subscribe((data) => {
      let todos: Common[] = [];
      this.openIssueCount = data.issues.length;
      data.issues.forEach((element: string) => {
        let lastIndex: number = element.lastIndexOf(',');
        todos.push({
          title: element.slice(0, lastIndex),
          url: element.slice(lastIndex + 1),
        });
      });
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  }

  welcome() {
    console.log('Hi! Welcome to my portfolio:-)');
    console.log(
      'This webpage is under active development, so feel free to suggest improvements: linkedin.com/in/lalilalox2 & github.com/shashank-priyadarshi'
    );
    console.log('Thanks for visiting:-)');
  }

  // @HostListener('window:resize', ['$event'])
  // getScreenSize(event?: any) {
  // console.log(window.innerWidth, window.innerHeight);
  // }
}
