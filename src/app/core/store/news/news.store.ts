import { languagesModel } from '../../services/models/language.model';
import { ErrorPayload, Response } from '../../services/models/response.model';

export const storeTag: string = '[News Store]';

export interface NewsStore
{
    response: Response;
    loading: boolean;
    error: ErrorPayload;
    languages: Array<languagesModel>;
}
