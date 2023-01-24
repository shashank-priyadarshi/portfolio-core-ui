import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarComponent } from 'src/app/modal/calendar/calendar.component';
import { ResumeComponent } from 'src/app/modal/resume/resume.component';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  dataLoaded = false;
  constructor(
    private sharedService: SharedService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sharedService.fetchData('biodata').subscribe(async (data) => {
      await data;
      this.dataLoaded = true;
    });
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
}
