import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMovieDetails, IMovieArticle} from '../movie.model';

@Component({
  selector: 'app-movie-details',
  template: `
      <div *ngIf="movieDetails" class="movie-details">
          <div class="movie-details__left">
              <img [src]="movieDetails.Poster" width="200px">
          </div>
          <div class="movie-details__right">
              <div class="title">
                  {{movieDetails.Title}}
                  <span class="">{{movieDetails.Released}}</span>
              </div>
              <div class="type">{{movieDetails.Type}}</div>
              <div class="plot">{{movieDetails.Plot}}</div>
          </div>
      </div>
  `,
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
  public movieDetails: IMovieDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((movieDetails: IMovieArticle) => {
      this.movieDetails = movieDetails.article;
    });
  }
}
