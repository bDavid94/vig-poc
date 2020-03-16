import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchAllComponent } from './search/search-all/search-all.component';
import { SearchIndividualComponent } from './search/search-individual/search-individual.component';
import { SearchEntityComponent } from './search/search-entity/search-entity.component';
import { SearchVesselComponent } from './search/search-vessel/search-vessel.component';
import { SearchLocationComponent } from './search/search-location/search-location.component';
import { SearchMassSearchComponent } from './search/search-mass-search/search-mass-search.component';

const routes: Routes = [
  {path: '', redirectTo: '/vigilance/search/all', pathMatch: 'full'},
  {path: 'vigilance', children: [
    {path: '', redirectTo: 'search/all', pathMatch: 'full'},
    {path: 'search', component: SearchComponent, children: [
      {path: '', redirectTo: 'all', pathMatch: 'full'},
      {path: 'all', component: SearchAllComponent},
      {path: 'individual', component: SearchIndividualComponent},
      {path: 'entity', component: SearchEntityComponent},
      {path: 'vessel', component: SearchVesselComponent},
      {path: 'location', component: SearchLocationComponent},
      {path: 'mass-search', component: SearchMassSearchComponent}
    ]},
  ]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
