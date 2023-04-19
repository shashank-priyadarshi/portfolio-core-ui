import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { Common, Biodata, WeekData } from 'src/assets/models/models.interface';
import { CustomError } from 'src/assets/models/custom-error.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent extends SharedService implements OnInit {
  openIssueCount!: number;
  // dataLoaded: boolean = false;
  // constructor() {
  //   super();
  // }
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      this.fetchtodos();
    }
    this.fetchBiodata();
    this.fetchGraphData();
    this.welcome();
  }

  fetchBiodata() {
    this.fetchData('biodata').subscribe((data) => {
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
        medium: 'https://medium.com/@ssnkprydrc',
        hashnode: 'https://blog.ssnk.in',
      };
      localStorage.setItem('biodata', JSON.stringify(biodata));
    });
  }

  fetchGraphData() {
    this.fetchData('graphdata').subscribe((data) => {
      let graphdata: Array<WeekData[]> = data.weekdata;
      localStorage.setItem('graphdata', JSON.stringify(graphdata));
    });
  }

  fetchtodos() {
    this.postData('todos', '').subscribe((data) => {
      if (!(data instanceof CustomError)) {
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
      } else {
        localStorage.removeItem('todos');
        localStorage.removeItem('token');
      }
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
