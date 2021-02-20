import { Component, OnInit } from '@angular/core';
import { api_key, baseUrl, imgBaseUrl } from '../helpers/constants';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  moviesList = null;
  imgBaseUrl = imgBaseUrl;
  apiKey = api_key;
  timeOutSearch = null;

  constructor(private movieservice: MoviesService) {}

  ngOnInit(){
    this.movieservice.getMovies().subscribe(data=>{this.moviesList=data.results}); 
  }

  searchMovie(movieTitle){
    clearTimeout(this.timeOutSearch);
    this.timeOutSearch = setTimeout(()=>{
      if(movieTitle){this.movieservice.getMoviesByTitle(movieTitle).subscribe(data=>{this.moviesList=data.results}); }
      else{this.movieservice.getMovies().subscribe(data=>{this.moviesList=data.results});}
    }, 1000)
  }

}
