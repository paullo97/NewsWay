import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FullArticleStore } from './article.store';

const getFullArticleState = createFeatureSelector<FullArticleStore>('article');

export const getNewsLoading = createSelector(
    getFullArticleState,
    (store: FullArticleStore) => store.loading
);
