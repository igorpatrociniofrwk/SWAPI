import { SpeciesService } from './../../services/species.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species;

  constructor(private specieService:SpeciesService) { }

  
  

  ngOnInit() {
     this.specieService.searchSpecies().subscribe((res: any) => {
       this.species = res.results;
     });
};
}