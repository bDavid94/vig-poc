import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchAllComponent } from './search/search-all/search-all.component';
import { SearchIndividualComponent } from './search/search-individual/search-individual.component';
import { SearchEntityComponent } from './search/search-entity/search-entity.component';
import { SearchLocationComponent } from './search/search-location/search-location.component';
import { SearchVesselComponent } from './search/search-vessel/search-vessel.component';
import { SearchMassSearchComponent } from './search/search-mass-search/search-mass-search.component';
import { NavigationComponent } from './search/navigation/navigation.component';
import { ListsComponent } from './search/lists/lists.component';
import { ListsService } from './search/lists/lists.service';
import { DragAndDropDirective } from './drag-and-drop.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PageNotFoundComponent,
    SearchAllComponent,
    SearchIndividualComponent,
    SearchEntityComponent,
    SearchLocationComponent,
    SearchVesselComponent,
    SearchMassSearchComponent,
    NavigationComponent,
    ListsComponent,
    DragAndDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
