import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { SavePipe } from './SavePipe';
import {HttpClientModule} from '@angular/common/http'
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SavePipe
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
