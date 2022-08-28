
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



export enum searchInTypes
{
  title,
  description,
  content
}

export enum languageTypes
{
  ar,
  de,
  en,
  es,
  fr,
  he,
  it,
  nl,
  no,
  pt,
  ru,
  sv,
  ud,
  zh
}

export enum sortByTypes
{
  relevancy, // articles more closely related to q come first.
  popularity, // articles from popular sources and publishers come first.
  publishedAt // newest articles come first.
}


export interface ErrorPayload
{
    message: string;
}

export interface ActionErrorPayload
{
    error: ErrorPayload;
}
