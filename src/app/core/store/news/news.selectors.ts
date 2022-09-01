import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsStore } from './news.store';

const getNewsState = createFeatureSelector<NewsStore>('news');

export const getNewsLoading = createSelector(
    getNewsState,
    (store: NewsStore) => store.loading
);

export const getArticles = createSelector(
    getNewsState,
    (store: NewsStore) => store.response.articles
);

export const getLanguages = createSelector(
    getNewsState,
    (store: NewsStore) => store.languages
);

export const getFavorites = createSelector(
    getNewsState,
    (store: NewsStore) => store.favorites
);
