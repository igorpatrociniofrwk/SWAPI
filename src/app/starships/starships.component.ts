import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService.component';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships;

  constructor(private apiService:ApiService) { }

  
  

  ngOnInit() {
     this.apiService.buscarStarships().subscribe((res: any) => {
       this.starships = res.results;
       console.log(this.starships)
     });
};
}