import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SpinnerService} from '../../core/spinner/spinner.service';
import {MovieService} from '../movie.service';
import {IPaginator, IMovieDetails} from '../movie.model';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit, AfterViewInit {
  public filterControl = new FormControl();
  public displayedColumns = ['Poster', 'Title', 'Type', 'Year', 'actions'];
  public columnsTable = {
    Poster: {
      sort: false,
      type: 'img'
    },
    Title: {
      sort: false,
      type: 'link'
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
    private spinner: SpinnerService,
    private movieService: MovieService,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.initFilter();
  }

  ngAfterViewInit() {
    this.matPaginator.page.subscribe(event => this.onFilterChanged(event.pageIndex));
  }

  public addMovie(movie: IMovieDetails): void {
    if (!this.movieService.getMovie(movie.imdbID)) {
      this.movieService.addMovie(movie);
    } else {
      this._snackBar.open(`${movie.Title} already exist!`, null, {
        duration: 2000,
      });
    }
  }

  public onFilterChanged(pageIndex): void {
    this.movieService
      .getMovieList(this.getQuery(), ++pageIndex)
      .finally(() => this.spinner.stop())
      .subscribe((movieList) => {
        this.paginator.length = movieList.totalResults;
        this.dataSource.data = movieList.Search;
      });
  }

  private initFilter() {
    this.filterControl
      .valueChanges
      .debounceTime(1000)
      .subscribe(() => this.onFilterChanged(this.paginator.pageIndex));
  }

  private getQuery(): string {
    return this.filterControl.value.toString().trim();
  }
}
