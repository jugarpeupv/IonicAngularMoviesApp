import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { api_key, baseUrl, searchBaseUrl } from '../helpers/constants';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    let httpParams= new HttpParams().set('api_key',api_key);
    return this.http.get(baseUrl, {params:httpParams})
  }

  getMoviesByTitle(titleMovie?:string): Observable<any> {
    let httpParams= new HttpParams().set('api_key',api_key).set('query', titleMovie);
    return this.http.get(searchBaseUrl, {params:httpParams})
  }
}


//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher