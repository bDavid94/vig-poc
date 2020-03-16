import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEntityComponent } from './search-entity.component';

describe('SearchEntityComponent', () => {
  let component: SearchEntityComponent;
  let fixture: ComponentFixture<SearchEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
