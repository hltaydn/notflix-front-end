import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
<<<<<<< HEAD
import { movieData } from 'src/app/movie';
import { ActivatedRoute, Router } from '@angular/router';
=======
//import { movieData } from 'src/app/movie';
>>>>>>> 773356b80e81c2bb74e54090645cbe2f6da436b7

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

@Input() movie:any;

<<<<<<< HEAD
movieId: any =0;

  constructor(private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.movieId = this.activatedRoute
    .paramMap
    .subscribe(params => this.movieId = params.get('id'));

  }

  onSelect(movie:any){
    this.router.navigate(['/home', movie.id]);
    console.log("onSelect works with id: " + movie.id);
=======
  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
    //this.movies=movieData;
    this.moviesService.getMovies().subscribe(
      (response)=>{this.movies = response;}
    );
>>>>>>> 773356b80e81c2bb74e54090645cbe2f6da436b7
  }

}
