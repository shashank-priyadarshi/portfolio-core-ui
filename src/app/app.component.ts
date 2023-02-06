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
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
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
      return data;
    });
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
          commits: element[3].Value,
        });
      });
      githubdata.scmActivity = activity;
      localStorage.setItem('githubdata', JSON.stringify(githubdata));
      return data;
    });
    this.sharedService.postData('todos', '').subscribe((data) => {
      let todos: Common[] = [];
      data.issues.forEach((element: string) => {
        let lastIndex: number = element.lastIndexOf(',');
        todos.push({
          title: element.slice(0, lastIndex),
          url: element.slice(lastIndex + 1),
        });
      });
      localStorage.setItem('todos', JSON.stringify(todos));
      return data;
    });
  }
}
