import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MovieService} from '../movie.service';
import {IPaginator, IMovieDetails} from '../movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  public displayedColumns = ['Poster', 'Title', 'Type', 'Year', 'actions'];
  public columnsTable = {
    Poster: {
      sort: false,
      type: 'img'
    },
    Title: {
      sort: false
    },
    Type: {
      sort: false
    },
    Year: {
      sort: false
    },
    actions: {
      type: 'actions'
    }
  };
  public dataSource = new MatTableDataSource<IMovieDetails>();
  public paginator: IPaginator = {
    pageIndex: 0,
    pageSize: 10,
    length: 0
  };
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  constructor(
    private movieService: MovieService
  ) {

  }

  ngOnInit() {
    this.initTableMovies();
  }

  public removeMovie(movie: IMovieDetails): void {
    this.movieService.removeMovie(movie.imdbID);
    this.initTableMovies();
  }

  private initTableMovies() {
    this.dataSource.data = this.movieService.getMovies();
  }
}
