import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles;

  constructor(private apiService:ApiService) { }

  
  

  ngOnInit() {
     this.apiService.buscarVehicles().subscribe((res: any) => {
       this.vehicles = res.results;
       console.log(this.vehicles)
     });
};
}