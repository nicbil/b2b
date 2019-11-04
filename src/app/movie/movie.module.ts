import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MovieListComponent} from './movie-list/movie-list.component';
import {SharedModule} from '../shared/shared.module';
import {MovieService} from './movie.service';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {MovieDetailsResolve} from './movie-details/movie-details-resolve';
import {MoviesComponent} from './movies/movies.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    MoviesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([{
      path: 'movie',
      pathMatch: 'full',
      component: MovieListComponent,
    }, {
      path: 'details/:imdbID',
      pathMatch: 'full',
      component: MovieDetailsComponent,
      resolve: {
        article: MovieDetailsResolve
      }
    }, {
      path: 'movies',
      pathMatch: 'full',
      component: MoviesComponent,
    }])
  ],
  providers: [
    MovieService,
    MovieDetailsResolve
  ]
})
export class MovieModule {
}
