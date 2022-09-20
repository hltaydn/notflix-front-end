import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovies } from 'src/app/model.Movies';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
 public movie: any = {
    id: 5,
    title: "Tim Burton's Corpse Bride",
    actors: 'Johnny Depp,Helena Bonham Carter',
    rate: 0,
    type: 'Comedy,Drama,Horror,Romance,Mystery',
    description:
      'Returning to the painstaking stop-motion animation he employed with amazing success in The Nightmare Before Christmas, Tim Burton presents a hair-raising legend based on a 19th-century Russian folktale, in which a young man mistakenly weds a corpse while on a two-day trek to the village of his real bride-to-be.',
    url: 'https://www.youtube.com/embed/9l9Se-4QbdY?list=PLHPTxTxtC0ibVZrT2_WKWUl2SAxsKuKwx',
  };

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.params['id']);

    this.movieService.getMovies().subscribe((p) => {
      this.movie = Object.values(p).find((item) => item.id == id);
    });

  }

  getStar(number:number){
console.log("star: "+ number);
  }
}
