import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { adapterContent } from '../adapter/content.adapter';
import { languagesModel } from './models/language.model';
import { RequestModel } from './models/request.model';
import { dataMock, Response } from './models/response.model';

@Injectable()
export class NewsService
{
    constructor(
        private readonly http: HttpClient,
        private readonly adapter: adapterContent
    )
    { }

    /**
     * It's a function that returns an Observable of type Response, which is a type that I created to
     * represent the response of the API
     * @param {RequestModel} [request] - RequestModel
     * @returns The response is a JSON object with the following structure:
     */
    public getNews(request?: RequestModel): Observable<Response>
    {
        return of(dataMock).pipe(delay(1500));
    }

    /**
     * It returns an observable of an array of languagesModel objects
     * @returns An observable of an array of languagesModel objects.
     */
    public getLanguages(): Observable<Array<languagesModel>>
    {
        return of([
            { value: 'ar', viewValue: 'Arabic' },
            { value: 'de', viewValue: 'German' },
            { value: 'en', viewValue: 'English' },
            { value: 'es', viewValue: 'Spanish' },
            { value: 'fr', viewValue: 'French' },
            { value: 'he', viewValue: 'Hebrew' },
            { value: 'it', viewValue: 'Italian' },
            { value: 'nl', viewValue: 'Dutch' },
            { value: 'no', viewValue: 'Norwegian' },
            { value: 'pt', viewValue: 'Portuguese' },
            { value: 'ru', viewValue: 'Russian' },
            { value: 'sv', viewValue: 'Swedish' },
            { value: 'zh', viewValue: 'Chinese' }
        ]).pipe(delay(1500));
    }

    public filterArticles(request: RequestModel): Observable<Response>
    {
        let filteredData: Response = clone(dataMock);
        const { q, domains, excludeDomains, from, to } = request;
        if (q)
        {
            filteredData.articles = dataMock.articles.filter(({ title }) =>
            {
                return title.toLocaleLowerCase().includes(q.toLocaleLowerCase().replace(/["]+/g, ''))
            });
        }
        if (domains)
        {
            filteredData.articles = filteredData.articles.filter((art) =>
            {
                if (art.url.includes(domains))
                {
                    return art;
                }
                return;
            })
        }
        if (excludeDomains)
        {
            filteredData.articles = filteredData.articles.filter((art) =>
            {
                if (!art.url.includes(excludeDomains))
                {
                    return art;
                }
                return;
            })
        }
        if (from)
        {
            filteredData.articles = filteredData.articles.filter(({ publishedAt }) =>
            {
                return new Date(publishedAt).getTime() >= new Date(from).getTime()
            });
        }
        if (to)
        {
            filteredData.articles = filteredData.articles.filter(({ publishedAt }) =>
            {
                return new Date(publishedAt).getTime() <= new Date(to).getTime()
            });
        }
        return of(filteredData).pipe(delay(1500));
    }
}


export function clone<T>(obj: T): T
{
    return typeof obj === 'object'
        ? JSON.parse(JSON.stringify(obj))
        : obj;
}
