import { languagesModel } from '../../services/models/language.model';
import { Article, ErrorPayload, Response } from '../../services/models/response.model';

export const storeTag: string = '[News Store]';

export interface NewsStore
{
    response: Response;
    loading: boolean;
    error: ErrorPayload;
    languages: Array<languagesModel>;
    favorites: Array<Article>;
}
