import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadFullArticle, loadFullArticleSuccess } from './article.actions';
import { FullArticleStore } from './article.store';

export const initialState: Partial<FullArticleStore> = {
    loading: true
};

const reducer: ActionReducer<Partial<FullArticleStore>, Action> = createReducer(
    initialState,
    on(loadFullArticle, (state) => ({
        ...state,
        loading: true
    })),
    on(loadFullArticleSuccess, (state) => ({
        ...state,
        loading: false
    }))
);

export function fullArticleReducer(
    state: Partial<FullArticleStore> = initialState,
    action: Action
): Partial<FullArticleStore>
{
    return reducer(state, action);
}
