import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { searchByIdUrl } from 'src/app/helpers/constants';
import { imgBaseUrl } from '../../helpers/constants'
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/interfaces/Movie';


interface Result {
  data?: Movie,
  err?: {
    error?:
    {
      status_message?: string,
    },
    status: number
  }
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movieId: string = null;
  movieWithDetails: Movie = null;
  imgBaseUrl: string = imgBaseUrl;
  errorValue: object;

  constructor(private activatedroute: ActivatedRoute, public movieservice: MoviesService) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(paramMap => {
      this.movieId = paramMap.get('movieDetailId');
    })
    this.searchMovieById();
  }

  setResults(result: Result) {
    const { data, err } = result;
    if (data) {
      this.movieWithDetails = data;
      this.errorValue = null;
    } else if (err) {
      this.errorValue = {
        status_message: err.error.status_message,
        status: err.status
      }
      this.movieWithDetails = null;
    }
  }

  searchMovieById() {
    this.movieservice.getMovieById(this.movieId).subscribe((data) => {
      this.setResults({ data })
    }, err => {
      this.setResults({ err })
    })
  }

}