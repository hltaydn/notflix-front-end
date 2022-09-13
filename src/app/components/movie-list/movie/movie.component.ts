import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

@Input() movie:any;

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
  }

}
