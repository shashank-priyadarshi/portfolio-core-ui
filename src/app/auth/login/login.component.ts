import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomError } from 'src/assets/models/custom-error.model';

interface LoginData {
  username: string;
  password: string;
  action: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent extends AuthService implements OnInit, OnDestroy {
  private navigationSubscription!: Subscription;
  loginform!: FormGroup;
  constructor(
    private httpclient: HttpClient,
    private router: Router,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    super(httpclient);
  }

  ngOnInit() {
    this.loginform = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30),
      ]),
      action: new FormControl(),
    });
    this.navigationSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeDialog();
      }
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    let error = this.loginform.controls[controlName].hasError(errorName);
    // if (error) {
    //   this.loginform.reset();
    // }
    return error;
  };

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  login(logindata: LoginData) {
    localStorage.setItem('user', logindata.username);
    logindata.action = 1;
    this.postData('credentials', logindata).subscribe((res) => {
      if (!(res instanceof CustomError) && res && res.token) {
        localStorage.setItem('token', res.token);
        this.snackBar.open('Logged in successfully!', 'OK', { duration: 1500 });
        this.router.navigate(['/page/admin']);
      } else {
        this.snackBar.open('Invalid Credentials!', 'OK', { duration: 1500 });
        this.router.navigate(['/page/home']);
      }
    });
  }

  closeDialog() {
    if (this.matDialog.openDialogs.length > 0) {
      this.matDialog.closeAll();
    }
  }
}
