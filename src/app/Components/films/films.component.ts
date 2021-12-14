import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/apiService.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films;


  constructor(private apiService:ApiService) { }

  
  

  ngOnInit() {
     this.apiService.buscarFilms().subscribe((res: any) => {
       this.films = res.results;
     });
};
}