import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
//import { movieData } from 'src/app/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

 public movies:any;

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
    //this.movies=movieData;
    this.moviesService.getMovies().subscribe(
      (response)=>{this.movies = response;}
    );
  }

}
