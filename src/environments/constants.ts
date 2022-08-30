import { ModuleWithProviders } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/** Api Key to usage in request to NEWS API */
export const ApiKey: string = '0568ee4a0aad482088d941dc5347d0a7';

export const baseUrl: string = 'https://newsapi.org/v2/everything?';

export const api = {
  system: {
      get: (query: {
        q: string;
        searchIn?: string;
        from?: string;
        to?: string;
        language?: string,
        sortBy?: string,
        pageSize: number,
        apiKey: string,
        domains?: string,
        excludeDomains?: string
      }) => `${baseUrl}${toQueryParam(query)}`
  }
}

export function toQueryParam(map: Record<string, any>): string
{
    return new URLSearchParams(map).toString();
}


/** Usage to Enable DevTools to see Store Redux */
export const storeTools: Array<ModuleWithProviders<any>> = [
  StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'News Way'
  })
];
