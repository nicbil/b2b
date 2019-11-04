export interface IPaginator {
  pageIndex: number;
  pageSize: number;
  length: number;
}

export interface IMovie {
  Response: string;
  Search: IMovieDetails[];
  totalResults: number;
}

export interface IMovieDetails {
  Poster: string;
  Title: string;
  Type: string;
  Plot: string;
  Production: string;
  Released: string;
  imdbID: number;
}

export interface IMovieArticle {
  article: IMovieDetails;
}


