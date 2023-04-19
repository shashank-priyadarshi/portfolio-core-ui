import { Component } from '@angular/core';
import { WeekData } from 'src/assets/models/models.interface';

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
  repoData: any;
  repoDataPromise = false;

  ngOnInit(): void {
    let githubdatastring: string = localStorage.getItem('graphdata') as string;
    if (githubdatastring) {
      let githubdata = JSON.parse(githubdatastring) as Array<WeekData[]>;
      this.parseGitHubData(githubdata);
    }
  }

  parseGitHubData(graphdata: Array<WeekData[]>) {
    let prDataList: series[] = [];
    let commitDataList: series[] = [];
    graphdata.forEach((element: Array<WeekData>) => {
      let currDate: String = element[2].Value.slice(0, 11);
      prDataList.push(<series>(<unknown>{
        name: currDate,
        value: element[0].Value,
      }));
      commitDataList.push(<series>(<unknown>{
        name: currDate,
        value: element[3].Value,
      }));
    });
    this.repoData = new Promise((resolve) => {
      resolve([
        <chartData>{
          name: 'PR',
          series: prDataList,
        },
        <chartData>{
          name: 'Cmit',
          series: commitDataList,
        },
      ]);
      this.repoDataPromise = true;
    });
  }
  loadStarredRepos() {}
}
