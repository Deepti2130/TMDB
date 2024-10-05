import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../model/movies';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {
@Input() movieobj! : Imovie;
  constructor() { }

  ngOnInit(): void {
  }

}
