import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { api_key, baseUrl, searchBaseUrl, searchByIdUrl } from '../helpers/constants';
import { Movie } from '../interfaces/Movie';
import { ResponseApi } from '../interfaces/ResponseAPI'

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    let httpParams = new HttpParams().set('api_key', api_key);
    return this.http.get(baseUrl, { params: httpParams }).pipe(map((res: ResponseApi) => res.results))
  }

  getMoviesByTitle(titleMovie?: string): Observable<Movie[]> {
    let httpParams = new HttpParams().set('api_key', api_key).set('query', titleMovie);
    return this.http.get(searchBaseUrl, { params: httpParams }).pipe(map((res: ResponseApi) => res.results))
  }

  getMovieById(idMovie: string): Observable<Movie> {
    let httpParams = new HttpParams().set('api_key', api_key);
    return this.http.get(searchByIdUrl + idMovie, { params: httpParams }).pipe(map((res: Movie) => res))
  }
}

