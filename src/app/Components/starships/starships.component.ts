import { StarshipsService } from './../../services/starships.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships;

  constructor(private starshipService:StarshipsService) { }

  
  

  ngOnInit() {
     this.starshipService.searchStarships().subscribe((res: any) => {
       this.starships = res.results;
     });
};
}