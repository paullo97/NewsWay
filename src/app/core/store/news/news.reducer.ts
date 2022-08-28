import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadNews, loadNewsError, loadNewsSuccess } from './news.actions';
import { NewsStore } from './news.store';

export const initialState: Partial<NewsStore> = {
    loading: true
};

const reducer: ActionReducer<Partial<NewsStore>, Action> = createReducer(
    initialState,
    on(loadNews, (state) => ({
        ...state,
        loading: true
    })),
    on(loadNewsSuccess, (state, action) => ({
      ...state,
      loading: false,
      response: action.articles
    })),
    on(loadNewsError, (state, action) => ({
      ...state,
      loading: false,
      error: action.error
    }))
);

export function newsReducer(
    state: Partial<NewsStore> = initialState,
    action: Action
): Partial<NewsStore>
{
    return reducer(state, action);
}
