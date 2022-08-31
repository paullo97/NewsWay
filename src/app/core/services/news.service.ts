import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { api, ApiKey } from 'src/environments/constants';
import { adapterContent } from '../adapter/content.adapter';
import { languagesModel } from './models/language.model';
import { RequestModel } from './models/request.model';
import { Response } from './models/response.model';

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
        return this.http.get<Response>(api.system.get({
            apiKey: ApiKey,
            q: request?.q || '',
            pageSize: 100,
            language: request?.language || 'pt',
            ...(!!request?.searchIn && { searchIn: request.searchIn}),
            ...(!!request?.from && { from: request.from }),
            ...(!!request?.to && { to: request.to }),
            ...(!!request?.sortBy && { sortBy: request.sortBy}),
            ...(!!request?.domains && { domains: request.domains }),
            ...(!!request?.excludeDomains && { excludeDomains: request.excludeDomains })
        })).pipe(
            map((response) => this.adapter.contentShort(response))
        )
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
}
