import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })

export class SpeciesService{

    url = "https://swapi.dev/api/"

    constructor(public http: HttpClient) {}

    searchSpecies() {
        return this.http.get('${this.url}/species');
    }

    searchSpeciesById() {
        return this.http.get('${this.url}/species/${id}');
    }
}