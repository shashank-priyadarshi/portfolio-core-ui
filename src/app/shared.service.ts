import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  public async delay(milliseconds: number) {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }
}
