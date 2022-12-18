import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private menuOpenedSource = new BehaviorSubject<boolean>(false);
  opened = this.menuOpenedSource.asObservable();

  constructor(private http: HttpClient) {}

  menu(opened: boolean) {
    this.menuOpenedSource.next(opened);
  }

  public fetchData(endpoint: string): Observable<any> {
    let headers = new HttpHeaders({ 'Referrer-Policy': 'no-referrer' });

    return this.http.get('https://api.ssnk.in/' + endpoint, {
      headers: headers,
    });
  }
}
