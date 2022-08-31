import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from './core/services/models/response.model';
import { loadNews } from './core/store/news/news.actions';
import { getArticles, getNewsLoading } from './core/store/news/news.selectors';
import { NewsStore } from './core/store/news/news.store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent
{
    public title: string = 'Welcome to NewsWay - the new way to get news';
    public loading$: Observable<boolean> = this.store.select(getNewsLoading);
    public articles$: Observable<Array<Article>> = this.store.select(getArticles);

    constructor(private store: Store<NewsStore>)
    {
        /** To the First Search, for the screen to have some content */
        this.store.dispatch(loadNews({
            request: {
                q: 'Brasil'
            }
        }));
    }
}
