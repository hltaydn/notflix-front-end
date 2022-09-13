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


  // public getMovie(id: number) {
  //   let movies = this.movies;
  //   return movies.find((p: any) => p.id == id);
  // }

}
