import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable()
export class NewsService
{
    constructor(
        private readonly http: HttpClient
    )
    { }

    public getNews(): Observable<Array<any>>
    {
      // encodeURI() Use in paramether q
      // return this.http.get<Array<Response>>(api.system.get({ q: '123' }))  ;
      return of([]).pipe(delay(1500));
    }
}
