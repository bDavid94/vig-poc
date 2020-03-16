import { Injectable } from '@angular/core';
import { VigilanceLists } from './list';

@Injectable()
export class ListsService {

  constructor() { }

  private vigLists = {
    lists: [{
      name: 'Group lists',
      expanded: true,
      isChecked: true,
      lists: [
        {
          name: 'Sanctions',
          expanded: true,
          isChecked: true,
          lists: [
            {name: 'List 1',
            mandatory: false,
            private: false,
            isChecked: true},
            {name: 'List 2',
            mandatory: true,
            private: false,
            isChecked: true},
          ]
        },
        {
          name: 'AML/CTF',
          expanded: true,
          isChecked: true,
          lists: [
            {name: 'List 1',
            mandatory: false,
            private: true,
            isChecked: true},
            {name: 'List 5',
            mandatory: true,
            private: false,
            isChecked: true},
          ]
        }
      ]
    },
    {
      name: 'Local lists',
      expanded: true,
      isChecked: true,
      lists: [
        {
          name: 'Sanctions',
          expanded: true,
          isChecked: true,
          lists: [
            {name: 'List 1',
            mandatory: false,
            private: true,
            isChecked: true},
            {name: 'List 2',
            mandatory: true,
            private: false,
            isChecked: true},
          ]
        },
        {
          name: 'AML/CTF',
          expanded: true,
          isChecked: true,
          lists: [
            {name: 'List 1',
            mandatory: false,
            private: true,
            isChecked: true},
            {name: 'List 5',
            mandatory: false,
            private: false,
            isChecked: true},
          ]
        }
      ]
    }
    ]
  };

  public getLists() {
    return this.vigLists;
  }
}

