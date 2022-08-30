import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from './models/response.model';

@Injectable()
export class NewsService
{
    constructor(
        private readonly http: HttpClient
    )
    { }

    public getNews(): Observable<Response>
    {
      console.log('Service');
    //   encodeURI() Use in paramether q
    return this.http.get<Response>(`https://newsapi.org/v2/everything?q='Apple'&from=2022-08-27&sortBy=popularity&language=pt&apiKey=0568ee4a0aad482088d941dc5347d0a7&pageSize=10`)
    }
}
