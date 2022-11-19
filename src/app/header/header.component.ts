import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  headerDetails!: string;
  startTime!: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.calculateExperience();
    setTimeout(() => {
      this.fetchDetails();
    }, 100);
  }

  calculateExperience() {
    this.sharedService.getSharedData().subscribe((data) => {
      let previousEmployer = data.employment_profile.previous_employer;
      if (!previousEmployer.length) {
        this.startTime =
          data.employment_profile.current_employer.date_of_joining;
      } else {
      }
    });
    return new Date().getTime() - new Date(this.startTime).getTime();
  }

  fetchDetails() {
    this.sharedService.getSharedData().subscribe((data) => {
      this.headerDetails =
        data.details.name +
        ' | ' +
        data.details.role[0] +
        ' | ' +
        data.details.role[1] +
        ' | ' +
        (this.calculateExperience() / 31557600000).toFixed(2) +
        ' years';
    });
  }
}
