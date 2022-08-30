import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api, ApiKey } from 'src/environments/constants';
import { RequestModel, Response } from './models/response.model';

@Injectable()
export class NewsService
{
    constructor(
        private readonly http: HttpClient
    )
    { }

    public getNews(request?: RequestModel): Observable<Response>
    {
        console.log('Service');
        console.log({
            apiKey: ApiKey,
            q: encodeURI(request?.q || ''),
            pageSize: 100,
            language: request?.language || 'pt',
            ...(!!request?.searchIn && { searchIn: request.searchIn}),
            ...(!!request?.from && { from: request.from }),
            ...(!!request?.to && { to: request.to }),
            ...(!!request?.sortBy && { sortBy: request.sortBy})
        });
    //   encodeURI() Use in paramether q
        // return this.http.get<Response>(`https://newsapi.org/v2/everything?q='Apple'&from=2022-08-27&sortBy=popularity&language=pt&apiKey=0568ee4a0aad482088d941dc5347d0a7&pageSize=10`)
        return this.http.get<Response>(api.system.get({
            apiKey: ApiKey,
            q: encodeURI(request?.q || ''),
            pageSize: 100,
            language: request?.language || 'pt',
            ...(!!request?.searchIn && { searchIn: request.searchIn}),
            ...(!!request?.from && { from: request.from }),
            ...(!!request?.to && { to: request.to }),
            ...(!!request?.sortBy && { sortBy: request.sortBy})
        }))
    }
}
