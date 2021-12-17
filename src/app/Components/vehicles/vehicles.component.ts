import { VehiclesService } from './../../services/vehicles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles;

  constructor(private vehicle:VehiclesService) { }

  
  

  ngOnInit() {
     this.vehicle.searchVehicles().subscribe((res: any) => {
       this.vehicles = res.results;
     });
};
}