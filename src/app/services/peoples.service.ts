import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })

export class PeoplesService{

    url = "https://swapi.dev/api/"
    page = "https://swapi.dev/api/people/"

    constructor(public http: HttpClient) {}

    searchPeoples() {
        return this.http.get(`${this.url}/people`);
    }

    /* pagePeoplees() {
        return this.http.get(`${this.page}/?page=${dd}`);
    } */

}