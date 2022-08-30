export interface RequestModel
{
    q: string;
    searchIn?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    language?: string;
    sortBy?: string;
}
