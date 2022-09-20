import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Movie{
  id:number=0
  title!: string;
  actors!: string;
  rate!: number;
  type!: string;
  description!: string;
  photoPath!: string;
  url!: string;

}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private url = 'http://localhost:9090/api/moviesWithRating';

  movies: any;

  constructor(private http: HttpClient) { }

   getMovies() {
    this.movies= this.http.get(this.url);

  //  console.log(this.movies);

    return this.http.get(this.url);
  }
}
