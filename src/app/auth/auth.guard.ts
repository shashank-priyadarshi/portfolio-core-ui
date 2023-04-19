import { ViewportRuler } from '@angular/cdk/scrolling';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    // private router: Router,
    private viewportRuler: ViewportRuler,
    private matDialog: MatDialog
  ) {}

  canActivate(): boolean {
    let token = localStorage.getItem('token');
    if (!token) {
      this.loadIFrame();
      return false;
    }
    return true;
  }

  loadIFrame() {
    const viewportSize = this.viewportRuler.getViewportSize();
    const height = Math.max(viewportSize.height * 0.3, 200) + 'px'; // set minimum height to 400px
    const width = Math.max(viewportSize.width * 0.3, 350) + 'px'; // set minimum width to 600px
    this.matDialog.open(LoginComponent, {
      height: height,
      width: width,
    });
  }
}
