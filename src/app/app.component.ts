import { Component, OnInit } from '@angular/core';
import { Imovie } from './shared/model/movies';
import { movieArray } from './shared/const/movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TMDB';
  movieData! :Array<Imovie> //store the array in a variable


  ngOnInit(): void {
      this.movieData = movieArray;
  }
}
