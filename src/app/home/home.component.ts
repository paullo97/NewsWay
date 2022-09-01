import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from './../core/services/models/response.model';
import { loadNews } from './../core/store/news/news.actions';
import { getArticles, getNewsLoading } from './../core/store/news/news.selectors';
import { NewsStore } from './../core/store/news/news.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent
{
    public loading$: Observable<boolean> = this.store.select(getNewsLoading);
    public articles$: Observable<Array<Article>> = this.store.select(getArticles);

    constructor(
        private store: Store<NewsStore>
    )
    {
        /** To the First Search, for the screen to have some content */
        this.store.dispatch(loadNews({
            request: {
                q: 'Brasil'
            }
        }));
    }
}
