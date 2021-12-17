import { PlanetsService } from './../../services/planets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets;

  constructor(private planetService:PlanetsService) { }

  
  

  ngOnInit() {
     this.planetService.searchPlanets().subscribe((res: any) => {
       this.planets = res.results;
     });
};
}