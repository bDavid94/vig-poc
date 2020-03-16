import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMassSearchComponent } from './search-mass-search.component';

describe('SearchMassSearchComponent', () => {
  let component: SearchMassSearchComponent;
  let fixture: ComponentFixture<SearchMassSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMassSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMassSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
