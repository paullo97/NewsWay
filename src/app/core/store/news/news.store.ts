import { ErrorPayload, Response } from '../../services/models/response.model';

export const storeTag: string = '[News Store]';

export interface NewsStore
{
    response: Response;
    loading: boolean;
    error: ErrorPayload;
}
