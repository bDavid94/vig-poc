import { Component, OnInit } from '@angular/core';
import { ListsService } from './lists/lists.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private listsService: ListsService) { }

  public extended = true;
  public lists;

  ngOnInit(): void {
    this.lists = this.listsService.getLists();
    console.log(this.lists);
  }

  public onExtend(event): void {
    this.extended = event;
  }

}
