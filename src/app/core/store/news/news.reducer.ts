import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { filterArticles, loadLanguages, loadLanguagesSuccess, loadNews, loadNewsError, loadNewsSuccess, removeFavorite, saveFavorite } from './news.actions';
import { NewsStore } from './news.store';

export const initialState: Partial<NewsStore> = {
    loading: true,
    favorites: []
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
    })),
    on(saveFavorite, (state, action) => ({
        ...state,
        favorites: (state.favorites?.filter((fav) => fav.url === action.article?.url) || []).length === 1 ? state.favorites : state.favorites?.concat(action.article || [])
    })),
    on(removeFavorite, (state, action) => ({
        ...state,
        favorites: state.favorites?.filter((fav) => fav.url !== action.article?.url)
    })),
    on(filterArticles, (state) => ({
        ...state,
        loading: true
    }))
);

export function newsReducer(
    state: Partial<NewsStore> = initialState,
    action: Action
): Partial<NewsStore>
{
    return reducer(state, action);
}
