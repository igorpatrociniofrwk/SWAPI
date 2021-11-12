import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets;

  constructor(private apiService:ApiService) { }

  
  

  ngOnInit() {
     this.apiService.buscarPlanets().subscribe((res: any) => {
       this.planets = res.results;
     });
};
}