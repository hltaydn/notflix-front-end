import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url = 'http://localhost:9090/api/movies';

  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get(this.url);
  }
}
