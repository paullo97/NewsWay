import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Response } from '../services/models/response.model';
import { NewsService } from '../services/news.service';
import { loadNews, loadNewsSuccess } from '../store/news/news.actions';

@Injectable()
export class NewsEffect
{
  deleteAffiliate$ = createEffect(() => this.actions$.pipe(
    ofType(loadNews),
    switchMap(() => this.service.getNews()),
    map((response: Response) =>
    {
      return loadNewsSuccess({ articles: response });
    }),
    catchError(() => EMPTY)
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly service: NewsService,
  )
  { }
}
