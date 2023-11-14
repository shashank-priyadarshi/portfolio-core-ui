import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { WeekData } from 'src/assets/models/models.interface';
// import { CustomError } from 'src/assets/models/custom-error.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent extends SharedService implements OnInit {
  // dataLoaded: boolean = false;
  // constructor() {
  //   super();
  // }
  ngOnInit() {
    // const token = localStorage.getItem('token');
    this.fetchGraphData();
    this.welcome();
  }

  fetchGraphData() {
    this.fetchData('graphdata').subscribe((data) => {
      const graphdata: Array<WeekData[]> = data.weekdata;
      localStorage.setItem('graphdata', JSON.stringify(graphdata));
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
