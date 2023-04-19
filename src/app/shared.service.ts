import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CustomError } from 'src/assets/models/custom-error.model';
import { Game } from 'src/assets/models/models.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) { }

  protected fetchData(endpoint: string): Observable<any> {
    let headers = new HttpHeaders({
      'Referrer-Policy': 'no-referrer',
    });

    return this.http
      .get('https://api.ssnk.in/' + endpoint, {
        headers: headers,
      })
      .pipe(
        catchError(() => {
          return of(null);
        })
      );
  }

  protected postData(endpoint: string, formData: any): Observable<any> {
    let headers = new HttpHeaders({
      'Referrer-Policy': 'no-referrer',
      'Content-Type': 'text/plain; charset=utf-8',
    });

    return this.http
      .post('https://api.ssnk.in/' + endpoint, formData, {
        headers: headers,
      })
      .pipe(
        catchError((err) => {
          const customError = new CustomError(`An error occurred: ${err.message}`);
          return of(customError);
        })
      );
  }

  protected getGames(): Observable<CustomError | Game[]> {
    return this.http.get<Game[]>('assets/data/games.json').pipe(catchError((err) => {
      const customError = new CustomError(`An error occurred while reading games: ${err.message}`);
      return of(customError);
    }));
  }
}

