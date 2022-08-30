import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { FullArticleService } from '../services/full-article.service';
import { loadFullArticle, loadFullArticleSuccess } from '../store/full-article/article.actions';

@Injectable()
export class FullArticleEffect
{
    getFullArticle$ = createEffect(() => this.actions$.pipe(
        ofType(loadFullArticle),
        switchMap(({ url }) => this.articleService.getFullArticle(url)),
        map((response) =>
        {
            console.log(JSON.stringify(response));
            return loadFullArticleSuccess();
        }),
        catchError(() => EMPTY)
    ));

    constructor(
        private readonly actions$: Actions,
        private readonly articleService: FullArticleService
    )
    { }
}
