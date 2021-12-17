import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })

export class PlanetsService{

    url = "https://swapi.dev/api/"

    constructor(public http: HttpClient) {}

    searchPlanets() {
        return this.http.get('${this.url}/planets');
    }

    searchPlanetsById() {
        return this.http.get('${this.url}/planets/${id}');
    }
}