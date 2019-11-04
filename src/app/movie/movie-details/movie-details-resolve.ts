import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve} from '@angular/router';
import {SpinnerService} from '../../core/spinner/spinner.service';
import {MovieService} from '../movie.service';
import {throwError} from 'rxjs';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieDetailsResolve implements Resolve<any> {
  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private movieService: MovieService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.spinner.start();
    return this.movieService
      .getMovieDetails(route.params.imdbID)
      .finally(() => this.spinner.stop())
      .catch(error => {
        this.router.navigate(['/']);
        return throwError(error.statusText);
      });
  }
}
