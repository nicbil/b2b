import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IMovie, IMovieDetails} from './movie.model';

@Injectable()
export class MovieService {
  private movies = new Map();

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getMovieList(title: string, pageIndex: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${environment.api.movie}&s=${title}&page=${pageIndex}`);
  }

  public getMovieDetails(imdbID: string): Observable<IMovieDetails> {
    return this.httpClient.get<IMovieDetails>(`${environment.api.movie}&i=${imdbID}`);
  }

  public addMovie(movie): void {
    this.movies.set(movie.imdbID, movie);
  }

  public getMovie(imdbID: number): boolean {
    return this.movies.get(imdbID);
  }

  public getMovies(): IMovieDetails[] {
    return Array.from(this.movies.values());
  }

  public removeMovie(imdbID: number): void {
    this.movies.delete(imdbID);
  }
}
