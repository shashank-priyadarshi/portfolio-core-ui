import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  public fetchData(endpoint: string): Observable<any> {
    return this.http.get('http://127.0.0.1:10000/' + endpoint);
  }
}
