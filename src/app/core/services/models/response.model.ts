
export interface Source
{
    id: string | null;
    name: string;
}

export interface Article
{
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

export interface Response
{
    articles: Array<Article>;
}

export interface ErrorPayload
{
    message: string;
}

export interface ActionErrorPayload
{
    error: ErrorPayload;
}


/** Models to send Request */
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
