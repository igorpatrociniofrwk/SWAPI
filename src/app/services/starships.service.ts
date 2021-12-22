import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })

export class StarshipsService{

    url = "https://swapi.dev/api/"

    constructor(public http: HttpClient) {}

    searchStarships() {
        return this.http.get(`${this.url}/starships`);
    }

    /* searchStarshipsById() {
        return this.http.get(`${this.url}/starships/${id}`);
    } */
}