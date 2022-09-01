import { createAction, props } from '@ngrx/store';
import { languagesModel } from '../../services/models/language.model';
import { RequestModel } from '../../services/models/request.model';
import { Response } from '../../services/models/response.model';
import { Article } from './../../services/models/response.model';
import { storeTag } from './news.store';

export const loadNews = createAction(
  `${storeTag} Load News`,
    props<{
        request?: RequestModel;
    }>()
);
export const loadNewsSuccess = createAction(
  `${storeTag} Load News Success`,
  props<{
    articles: Response;
  }>()
)
export const loadNewsError = createAction(
  `${storeTag} Load Error`
);

/** Actions to Load Languages */
export const loadLanguages = createAction(
    `${storeTag} Load Languages to search`
);
export const loadLanguagesSuccess = createAction(
    `${storeTag} Load Languages to Search Success`,
    props<{
        languages: Array<languagesModel>;
    }>()
);

/** Actions to Favorite */
export const saveFavorite = createAction(
    `${storeTag} Save on Favorites`,
    props<{
        article: Article | undefined;
    }>()
);
export const removeFavorite = createAction(
    `${storeTag} Save on FAvorites`,
    props<{
        article: Article | undefined;
    }>()
);
