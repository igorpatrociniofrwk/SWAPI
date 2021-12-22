import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })

export class PeoplesService{

    url = "https://swapi.dev/api/"

    constructor(public http: HttpClient) {}

    searchPeoples() {
        return this.http.get(`${this.url}/people`);
    }

    /* searchPeoplesById() {
        return this.http.get(`${this.url}/people/${id}`);
    } */
}