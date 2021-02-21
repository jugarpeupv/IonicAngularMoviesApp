import { Component, OnInit } from '@angular/core';
import { api_key, baseUrl, imgBaseUrl } from '../helpers/constants';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/Movie';

export interface Result {
  data?: Movie[],
  err?: {
    error?: {
      status_message?: string,
    }
  }
}

@Component({
  selector: 'app-home',
  templateUrl: 'movies.page.html',
})
export class MoviesPage implements OnInit {
  moviesList: Movie[] = null;
  imgBaseUrl: string = imgBaseUrl;
  apiKey: string = api_key;
  timeOutSearch = null;
  loading: boolean = true;
  searchingError: string = null;

  constructor(private movieservice: MoviesService) { }

  ngOnInit() {
    this.movieservice.getMovies().subscribe((data) => {
      this.setResults({ data })
    });
  }

  setResults(result: Result) {
    const { data, err } = result;
    if (data) {
      this.moviesList = data;
      this.loading = false;
      this.searchingError = null;
    } else if (err) {
      if (err.error && err.error.status_message) {
        this.searchingError = err.error.status_message;
        this.loading = false;
        this.moviesList = null;
      }
      else {
        this.searchingError = "Internal Server Error"
      }
    }
  }

  searchMovie(movieTitle: string) {
    clearTimeout(this.timeOutSearch);
    this.timeOutSearch = setTimeout(() => {
      this.loading = true;
      if (movieTitle) {
        this.movieservice.getMoviesByTitle(movieTitle).subscribe((data) => {
          this.setResults({ data })
        }, err => {
          this.setResults({ err })
        });
      } else {
        this.movieservice.getMovies().subscribe((data) => {
          this.setResults({ data })
        }, err => {
          this.setResults({ err })
        });
      }
    }, 1000);
  }
}
