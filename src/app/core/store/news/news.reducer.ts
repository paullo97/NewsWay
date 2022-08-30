import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadLanguages, loadLanguagesSuccess, loadNews, loadNewsError, loadNewsSuccess } from './news.actions';
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
      loading: false
    })),
    on(loadLanguages, (state) => ({
        ...state,
        loading: true
    })),
    on(loadLanguagesSuccess, (state, action) => ({
        ...state,
        loading: false,
        languages: action.languages
    }))
);

export function newsReducer(
    state: Partial<NewsStore> = initialState,
    action: Action
): Partial<NewsStore>
{
    return reducer(state, action);
}
