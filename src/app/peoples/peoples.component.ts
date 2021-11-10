import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService.component';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  peoples;

  constructor(private apiService:ApiService) { }

  
  

  ngOnInit() {
     this.apiService.buscarPeoples().subscribe((res: any) => {
      this.peoples = res.results;
      console.log(this.peoples)
    });
};
}