import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  public fetchData(endpoint: string): Observable<any> {
    let headers = new HttpHeaders({
      'Referrer-Policy': 'no-referrer',
    });

    return this.http.get('https://api2.ssnk.in/' + endpoint, {
      headers: headers,
    });
  }

  public postData(endpoint: string, formData: any): Observable<any> {
    let headers = new HttpHeaders({
      'Referrer-Policy': 'no-referrer',
      'Content-Type': 'text/plain; charset=utf-8',
    });

    return this.http.post('https://api2.ssnk.in/' + endpoint, formData, {
      headers: headers,
    });
  }
}
