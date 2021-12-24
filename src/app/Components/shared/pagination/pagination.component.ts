import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() next: string;
  @Input() previous: string;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateTo(nextOrPrevious) {
    console.log(nextOrPrevious)
    this.router.navigateByUrl(nextOrPrevious)
  }

}
