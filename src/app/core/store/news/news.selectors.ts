import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsStore } from './news.store';

const getNewsState = createFeatureSelector<NewsStore>('news');

export const getNewsLoading = createSelector(
    getNewsState,
    (store: NewsStore) => store.loading
);
