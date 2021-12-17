import { FilmsService } from './../../services/films.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films;


  constructor(private filmService:FilmsService) { }
  

  ngOnInit() {
     this.filmService.searchFilms().subscribe((res: any) => {
       this.films = res.results;
     });
};
}