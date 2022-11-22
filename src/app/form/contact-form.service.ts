import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  private api = 'https://mailthis.to/gungun';

  constructor(private http: HttpClient) {}

  PostMessage(data: any) {
    return this.http.post(this.api, data, {responseType: 'text'}).pipe(
      map((res: any) => {
        if (res){return res};
      },
      (err: any) => {
        return err;
      }
    ));
  }
}
