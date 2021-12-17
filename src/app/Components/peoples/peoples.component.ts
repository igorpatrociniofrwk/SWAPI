import { PeoplesService } from './../../services/peoples.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  peoples;

  constructor(private peopleService:PeoplesService) { }

  
  

  ngOnInit() {
     this.peopleService.searchPeoples().subscribe((res: any) => {
      this.peoples = res.results;
    });
};
}