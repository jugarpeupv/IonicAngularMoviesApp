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
  loading = true;

  constructor(private movieservice: MoviesService) {}

  ngOnInit(){
    this.movieservice.getMovies().subscribe(data=>{
      this.moviesList=data.results;
      this.loading=false;}); 
  }

  searchMovie(movieTitle:string){
    clearTimeout(this.timeOutSearch);
    this.timeOutSearch = setTimeout(()=>{
      this.loading=true;
      if(movieTitle){this.movieservice.getMoviesByTitle(movieTitle).subscribe(data=>{
        this.moviesList=data.results
        this.loading=false;}); }
      else{this.movieservice.getMovies().subscribe(data=>{
        this.moviesList=data.results;
        this.loading=false;});}
    }, 1000)
  }

}
