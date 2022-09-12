import { Component, OnInit } from '@angular/core';
import { movieData } from 'src/app/movie';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  //  public movies: any= movieData;


  searchText: string = '';

  public posts: any;

  public moviesData: any;

  public filteredMoviesData: any;

  constructor(private movieService: MoviesService) {}

  filterList() {
    this.filteredMoviesData = this.posts.filter((post: { title: string }) =>
      post.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  ngOnInit() {
    this.moviesData = this.movieService.getMovies().subscribe((response:any) => {
      this.posts = response;

      this.filterList();
    });
  }
}
