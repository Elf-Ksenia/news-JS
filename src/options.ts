export type DataNews = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  source: {
    id: string;
    name: string;
  };
  url: string;
  urlToImage: string;
};
export type DataSources = {
  id: string;
  name: string;
};

export type IData = {
  articles?: DataNews[];
  sources?: DataSources[];
};

export interface InterfaceNewsResponse {
  status: 'ok' | number;
  totalResults?: number;

  articles: DataNews[];
}

export interface InterfaceSourcesResponse {
  status: 'ok' | number;
  totalResults?: number;

  sources: DataSources[];
}
