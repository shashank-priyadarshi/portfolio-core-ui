import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Token } from 'src/assets/models/models.interface';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

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
    private matDialog: MatDialog
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
    this.postData('/credentials', logindata).subscribe((res) => {
      console.log(res);
      console.log(res.status);
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/page/admin']);
      } else {
        console.error('Login unsuccessful');
      }
    });
  }

  closeDialog() {
    if (this.matDialog.openDialogs.length > 0) {
      this.matDialog.closeAll();
    }
  }
}
