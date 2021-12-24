import { Observable } from 'rxjs';
import { FilmsService } from './../../services/films.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films;
  nextpage;
  previouspage;


  constructor(private filmService:FilmsService) { }
  

  ngOnInit() {
     this.filmService.searchFilms().subscribe((res: any) => {
       this.nextpage = res.next;
       this.previouspage = res.previous;
       this.films = res.results;
       console.log(res)
     });
      console.log(this.nextpage)
      console.log(this.previouspage)
};

}