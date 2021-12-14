import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/apiService.component';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species;

  constructor(private apiService:ApiService) { }

  
  

  ngOnInit() {
     this.apiService.buscarSpecies().subscribe((res: any) => {
       this.species = res.results;
     });
};
}