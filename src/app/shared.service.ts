import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  public fetchData(endpoint: string): Observable<any> {
    let headers = new HttpHeaders({ 'Referrer-Policy': 'no-referrer' });

    return this.http.get('https://api.ssnk.in/' + endpoint, {
      headers: headers,
    });
  }

  public postData(endpoint: string, formData: any): Observable<any> {
    let headers = new HttpHeaders({
      'Referrer-Policy': 'no-referrer',
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Length': '3',
    });

    return this.http.post('http://localhost/' + endpoint, formData, {
      headers: headers,
    });
  }
}
