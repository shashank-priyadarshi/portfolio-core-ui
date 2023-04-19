import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the access token from local storage
    const accessToken = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    // Check if the request is for the auth endpoint
    if (request.url.endsWith('/credentials')) {
      return next.handle(request); // Do not add auth header
    }

    // Add the authorization header with the access token
    if (accessToken) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user}:${accessToken}`,
        },
      });
      return next.handle(authRequest);
    }

    return next.handle(request); // No access token, proceed with request
  }

  init(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url.endsWith('/admin')) {
          const token = localStorage.getItem('access_token');
          if (!token) {
            this.router.navigate(['/auth/login']);
          }
        }
      });
  }
}
