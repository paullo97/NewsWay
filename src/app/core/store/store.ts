import { Action, ActionReducerMap } from '@ngrx/store';
import { newsReducer } from './news/news.reducer';
import { NewsStore } from './news/news.store';

export interface AppState
{
    news: NewsStore
}

/**
 * App root store containing all reducers.
 */
export const reducers: ActionReducerMap<object, Action> = {
    news: newsReducer
};
