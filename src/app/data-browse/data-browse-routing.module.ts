
import {RouterModule, Routes} from "@angular/router";
import {CompoundComponent} from "./compound/compound.component";
import {NgModule} from "@angular/core";
import {DataBrowseComponent} from "./data-browse/data-browse.component";
import {BrowseListComponent} from "./browse-list/browse-list.component";
import {UniprotComponent} from './uniport/uniprot.component';
import {UniprotDetailComponent} from './compound/uniprot-detail/uniprot-detail.component';
import {CompoundDetailComponent} from "./uniport/compound-detail/compound-detail.component";

const routes: Routes =[
  {
    path: '',
    component: DataBrowseComponent,
    children: [
      {
        path: ' ',
        component: BrowseListComponent
      },
      {
        path: 'compound',
        component: CompoundComponent,
      },
      {
        path: 'uniprot',
        component: UniprotComponent,
      },
      {
        path: 'uniprot-detail/:id',
        component: UniprotDetailComponent,
      },
      {
        path: 'compound-detail/:id',
        component: CompoundDetailComponent,
      }
    ]
  },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DataBrowseRoutingModule {

}
