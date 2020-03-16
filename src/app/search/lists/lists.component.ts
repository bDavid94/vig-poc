import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  @Output()
  public extendedEmitter: EventEmitter<boolean> = new EventEmitter();

  public extended = true;

  @Input()
  public vigLists;

  constructor() { }

  ngOnInit(): void {
  }

  public toogleHide(): void {
    this.extended = !this.extended;
    this.extendedEmitter.emit(this.extended);
  }

  public subCategoryChecked(subCategoryName: string, categoryName: string): boolean {
    if (this.vigLists.lists) {
      const filteredC = this.vigLists.lists.filter(s => s.name === categoryName);
      console.log('h', filteredC);
    }
    return true;
  }

  onCollapse(parent) {
    parent.expanded = !parent.expanded;
  }

  shouldParrentBeChecked(parent) {
    let test = true;
    for (let i=0; i<parent.lists.length; i++) {
      test = test && parent.lists[i].isChecked;
    }
    return test;
  }

  checkChilds(parent) {
    console.log('called');
    parent.isChecked = !parent.isChecked;
    console.log('parent', parent.isChecked);
    if (parent.lists) {
      for (let i = 0; i < parent.lists.length; i++) {
        if (!parent.lists[i].mandatory) {
          parent.lists[i].isChecked = parent.lists[i].isChecked;
          console.log('here private', parent.lists[i]);
          this.checkChilds(parent.lists[i]);
        }
      }
    }
    console.log(this.vigLists.lists)
  }

  test(l) {
    this.vigLists.lists = l.lists.forEach(parent => {
      if (parent.lists) {
        this.test(l);
      }
    })
  }

}
