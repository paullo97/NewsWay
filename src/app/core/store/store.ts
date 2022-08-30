import { Action, ActionReducerMap } from '@ngrx/store';
import { fullArticleReducer } from './full-article/article.reducer';
import { FullArticleStore } from './full-article/article.store';
import { newsReducer } from './news/news.reducer';
import { NewsStore } from './news/news.store';

export interface AppState
{
    news: NewsStore,
    article: FullArticleStore
}

/**
 * App root store containing all reducers.
 */
export const reducers: ActionReducerMap<object, Action> = {
    news: newsReducer,
    article: fullArticleReducer
};
