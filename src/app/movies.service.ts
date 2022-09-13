import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private url = 'http://localhost:9090/api/movies';

  movies: any;

  constructor(private http: HttpClient) { }

   getMovies() {
    this.movies= this.http.get(this.url);

  //  console.log(this.movies);

    return this.http.get(this.url);
  }
}
