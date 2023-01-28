import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    // let biodata = this.sharedService.fetchData('biodata').subscribe((data) => {
    //   console.log(data);
    //   return data;
    // });
    // let githubdata = this.sharedService
    //   .fetchData('githubdata')
    //   .subscribe((data) => {
    //     console.log(data);
    //     return data;
    //   });
    // localStorage.setItem('biodata', biodata);
    // localStorage.setItem('githubdata', githubdata);
  }
}
