import { PeoplesService } from './../../services/peoples.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  peoples;
  nextpage;
  previouspage;

  constructor(private peopleService:PeoplesService) { }

  ngOnInit() {
     this.peopleService.searchPeoples().subscribe((res: any) => {
      this.nextpage = res.next;
      this.previouspage = res.previous;
      this.peoples = res.results;
      console.log(res)
    });
    console.log(this.nextpage)
      console.log(this.previouspage)
};
}