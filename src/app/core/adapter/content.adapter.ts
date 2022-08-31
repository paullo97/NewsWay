import { Injectable } from '@angular/core';
import { Response } from '../services/models/response.model';

@Injectable()
export class adapterContent
{
    /**
     * It takes a response object, and returns a new response object with the same properties, except
     * that the content property of each article is sliced to the first occurrence of the character '['
     * @param {Response} data - Response
     * @returns The data object is being returned with the articles array mapped to a new array with
     * the content property sliced to the first index of the '[' character.
     */
    public contentShort(data: Response): Response
    {
        return {
            ...data,
            articles: data.articles.map((dt) => ({
                ...dt,
                content: dt.content.slice(0, dt.content.indexOf('['))
            }))
        };
    }
}
