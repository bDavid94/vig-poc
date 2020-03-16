import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-mass-search',
  templateUrl: './search-mass-search.component.html',
  styleUrls: ['./search-mass-search.component.scss']
})
export class SearchMassSearchComponent implements OnInit {

  constructor() { }

  fileName = '';

  ngOnInit(): void {
  }

  uploadFile(event) {
    this.fileName = event.name;
    console.log(event);
  }

}
