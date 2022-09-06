import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie-list/movie/movie.component';
import { SavePipe } from './SavePipe';
import {HttpClientModule} from '@angular/common/http'
import { MoviesService } from './movies.service';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SavePipe,
    MovieListComponent,
    MovieDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
