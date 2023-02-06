import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

interface ScheduleData {
  name: string;
  email: string;
  comment: string;
  date: Date;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
})
export class CalendarComponent implements OnInit {
  public scheduleForm!: UntypedFormGroup;
  message: string = 'Request submitted successfully!';
  action: string = 'Dismiss';
  constructor(
    public matSnackBar: MatSnackBar,
    private router: Router,
    private sharedSvc: SharedService
  ) {}

  ngOnInit(): void {
    this.scheduleForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      comment: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(150),
      ]),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(60),
      ]),
      date: new UntypedFormControl('', Validators.required),
    });
  }

  public onCancel = () => {
    this.scheduleForm.reset();
    this.router.navigate(['/']);
  };

  public hasError = (controlName: string, errorName: string) => {
    return this.scheduleForm.controls[controlName].hasError(errorName);
  };

  public createSchedule = (scheduleForm: ScheduleData) => {
    if (this.scheduleForm.valid) {
      if (this.executeScheduleCreation(scheduleForm) > 299) {
        this.formSnackBar('Error submitting request', 'Dismiss');
      } else {
        this.formSnackBar(this.message, this.action);
        this.scheduleForm.reset();
        this.router.navigate(['/']);
      }
    }
  };

  private executeScheduleCreation = (scheduleForm: ScheduleData): number => {
    let schedule: ScheduleData = {
      name: scheduleForm.name,
      comment: scheduleForm.comment,
      email: scheduleForm.email,
      date: scheduleForm.date,
    };
    this.sharedSvc.postData('/schedule', schedule).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    // let apiUrl = 'api/owner';
    // this.repository.create(apiUrl, schedule).subscribe(
    // () => {
    //this is temporary, until we create our dialogs
    // this.location.back();
    // },
    // () => {
    //temporary as well
    // this.location.back();
    // }
    // );
    this.scheduleForm.reset();
    return 300;
  };

  formSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 3000,
    });
  }
}
