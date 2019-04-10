import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  providers: [FilmService]
})
export class FilmsComponent implements OnInit {
  description: string = 'Middle card description';
  films: object[];

  constructor(public filmsService: FilmService) { 
    
  }

  ngOnInit() {
    this.films = this.filmsService.getFilms();
  }

}
