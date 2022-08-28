import { createAction, props } from '@ngrx/store';
import { ErrorPayload, Response } from '../../services/models/response.model';
import { storeTag } from './news.store';

export const loadNews = createAction(
  `${storeTag} Load News`
);

export const loadNewsSuccess = createAction(
  `${storeTag} Load News Success`,
  props<{
    articles: Response;
  }>()
)

export const loadNewsError = createAction(
  `${storeTag} Load News Error`,
  props<{
    error: ErrorPayload;
  }>()
);
