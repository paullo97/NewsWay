import { createAction, props } from '@ngrx/store';
import { RequestModel, Response } from '../../services/models/response.model';
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
