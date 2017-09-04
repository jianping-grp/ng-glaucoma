
import {RouterModule, Routes} from "@angular/router";
import {CompoundComponent} from "./compound/compound.component";
import {NgModule} from "@angular/core";
import {DataBrowseComponent} from "./data-browse/data-browse.component";
import {BrowseListComponent} from "./browse-list/browse-list.component";
import {UniportComponent} from './uniport/uniport.component';
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
        path: 'uniport',
        component: UniportComponent,
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
