import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

interface ScheduleData {
  name: string;
  email: string;
  comment: string;
  meeting: boolean;
  newsletter: boolean;
  date: Date;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent extends PagesService {
  public scheduleForm!: UntypedFormGroup;
  message: string = 'Request submitted successfully!';
  action: string = 'Dismiss';
  showDatepicker: boolean = false;
  constructor(
    private matSnackBar: MatSnackBar,
    private router: Router,
    private httpcomp: HttpClient
  ) {
    super(httpcomp);
  }
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
        Validators.minLength(11),
        this.popularEmailProvidersOnly,
      ]),
      date: new UntypedFormControl(
        {
          value: '',
          disabled: this.showDatepicker,
        },
        [Validators.required, this.invalidDate]
      ),
      meeting: new UntypedFormControl(false),
      newsletter: new UntypedFormControl(false),
    });
  }

  public onCancel = () => {
    this.scheduleForm.reset();
    this.router.navigate(['/']);
  };

  public hasError = (controlName: string, errorName: string) => {
    return this.scheduleForm.controls[controlName].hasError(errorName);
  };

  popularEmailProvidersOnly(control: { value: any }) {
    const popularProviders = ['gmail.com', 'yahoo.com', 'hotmail.com'];
    const email = control.value;
    if (email == null || email.length === 0) {
      return { provider: true };
    }
    const domain = email.substring(email.lastIndexOf('@') + 1).toLowerCase();
    if (popularProviders.includes(domain)) {
      return null;
    } else {
      return { provider: true };
    }
  }

  invalidDate(control: { value: any }): { [key: string]: boolean } | null {
    const now = new Date();
    const selectedDateTime = control.value ? new Date(control.value) : null;
    if (selectedDateTime && selectedDateTime <= now) {
      return { invalidDate: true };
    }
    return null;
  }

  public createSchedule = (scheduleForm: ScheduleData) => {
    if (this.scheduleForm.valid) {
      if (this.executeScheduleCreation(scheduleForm) > 299) {
        this.formSnackBar('Error submitting request', 'Dismiss');
      } else {
        this.formSnackBar(this.message, this.action);
        this.scheduleForm.reset();
      }
    }
  };

  private executeScheduleCreation = (scheduleForm: ScheduleData): number => {
    let schedule: ScheduleData = {
      name: scheduleForm.name,
      comment: scheduleForm.comment,
      email: scheduleForm.email,
      date: scheduleForm.date,
      meeting: scheduleForm.meeting,
      newsletter: scheduleForm.newsletter,
    };
    let responseStatus: number = -1;
    this.postData('/schedule', schedule).subscribe((data) => {
      responseStatus = data.status;
    });
    this.scheduleForm.reset();
    return responseStatus;
  };

  formSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 3000,
    });
  }
}
