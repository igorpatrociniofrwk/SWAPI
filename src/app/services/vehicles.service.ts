import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })

export class VehiclesService{

    url = "https://swapi.dev/api/"

    constructor(public http: HttpClient) {}

    searchVehicles() {
        return this.http.get(`${this.url}/vehicles`);
    }

    /* searchVehiclesById() {
        return this.http.get(`${this.url}/vehicles/${id}`);
    } */
}