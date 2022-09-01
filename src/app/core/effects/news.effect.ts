import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { languagesModel } from '../services/models/language.model';
import { Response } from '../services/models/response.model';
import { NewsService } from '../services/news.service';
import { loadLanguagesSuccess, loadNews, loadNewsSuccess } from '../store/news/news.actions';
import { loadLanguages, removeFavorite, saveFavorite } from './../store/news/news.actions';

@Injectable()
export class NewsEffect
{
    getNews$ = createEffect(() => this.actions$.pipe(
        ofType(loadNews),
        switchMap((response) => this.service.getNews(response.request)),
        map((articles: Response) => loadNewsSuccess({ articles })),
        catchError(() => EMPTY)
    ));

    getLanguages$ = createEffect(() => this.actions$.pipe(
        ofType(loadLanguages),
        switchMap(() => this.service.getLanguages()),
        map((languages: Array<languagesModel>) => loadLanguagesSuccess({ languages })),
        catchError(() => EMPTY)
    ));

    saveFavorite$ = createEffect(() => this.actions$.pipe(
        ofType(saveFavorite),
        map(() =>
        {
            this._snackBar.open('Article save in your Favorites', 'OK', {duration: 3000});

        })
    ), {dispatch: false});

    removeFavorite$ = createEffect(() => this.actions$.pipe(
        ofType(removeFavorite),
        tap(() =>
        {
            this._snackBar.open('Article Remove to your Favorites', 'OK', {duration: 3000});
        })
    ), {dispatch: false});

    constructor(
        private readonly actions$: Actions,
        private readonly service: NewsService,
        private readonly _snackBar: MatSnackBar
    )
    { }
}
