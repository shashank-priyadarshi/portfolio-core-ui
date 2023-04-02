import { Component } from '@angular/core';
import { SCMActivity, SCMData } from 'src/assets/models/models.interface';

interface chartData {
  name: string;
  series: series[];
}

interface series {
  name: string;
  value: number;
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.sass'],
})
export class ActivityComponent {
  starredRepos: any;
  starredRepoTooltip: string = '';
  openIssueTooltip: string = '';
  repoData: any;
  repoDataPromise = false;
  showStarredRepos: boolean = false;

  ngOnInit(): void {
    let githubdatastring: string = localStorage.getItem('githubdata') as string;
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
  loadStarredRepos() {}
}
