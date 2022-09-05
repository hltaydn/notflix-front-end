import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public moviesUrl:any = "./movie.ts";

  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get(this.moviesUrl);
  }
}
