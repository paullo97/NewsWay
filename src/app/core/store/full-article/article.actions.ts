import { createAction, props } from '@ngrx/store';
import { storeTag } from './article.store';

export const loadFullArticle = createAction(
    `${storeTag} Load Full Article`,
    props<{
        url: string
    }>()
);

export const loadFullArticleSuccess = createAction(
    `${storeTag} Load Full Article Success`
);
