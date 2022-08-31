import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FullArticleService
{
    constructor(
        private readonly http: HttpClient
    )
    { }

    public getFullArticle(url: string): Observable<any>
    {
        return this.http.jsonp(url, 'source');
    }
}
