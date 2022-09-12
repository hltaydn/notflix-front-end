import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie-list/movie/movie.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MovieListComponent},
  {path: 'home/:id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [AppComponent,MovieComponent];
