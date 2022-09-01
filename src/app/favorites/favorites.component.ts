import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getNewsLoading } from 'src/app/core/store/news/news.selectors';
import { NewsStore } from 'src/app/core/store/news/news.store';
import { Article } from './../core/services/models/response.model';
import { getFavorites } from './../core/store/news/news.selectors';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: [ './favorites.component.scss' ]
})
export class FavoritesComponent
{
    public loading$: Observable<boolean> = this.store.select(getNewsLoading);
    public articles$: Observable<Array<Article>> = this.store.select(getFavorites);

    constructor(
        private store: Store<NewsStore>
    )
    { }
}
