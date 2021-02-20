import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { searchByIdUrl } from 'src/app/helpers/constants';
import {imgBaseUrl} from '../../helpers/constants'
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  
  movieId = null;
  movieWithDetails=null;
  imgBaseUrl = imgBaseUrl;

  constructor(private activatedroute: ActivatedRoute, public movieservice: MoviesService) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(paramMap=>{
     this.movieId=paramMap.get('homeDetailId');
    })
    this.searchMovieById();
  }

  searchMovieById(){
    if(this.movieId!=null){
      this.movieservice.getMovieById(this.movieId).subscribe((data)=>{
      this.movieWithDetails=data;
   }) 
    }else{
      console.log("movieId not specified")
    }
  } 



}