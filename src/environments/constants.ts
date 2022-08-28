import { languageTypes, searchInTypes, sortByTypes } from 'src/app/core/services/models/response.model';

/** Api Key to usage in request to NEWS API */
export const ApiKey: string = '0568ee4a0aad482088d941dc5347d0a7';

export const baseUrl: string = 'https://newsapi.org/v2/everything?';

export const api = {
  system: {
      get: (query: {
        q: string;
        searchIn: searchInTypes;
        from: string;
        to: string;
        language: languageTypes,
        sortBy: sortByTypes,
        pageSize: number,
        apiKey: string
      }) => `${baseUrl}${toQueryParam(query)}`
  }
}

export function toQueryParam(map: Record<string, any>): string
{
    return new URLSearchParams(map).toString();
}
