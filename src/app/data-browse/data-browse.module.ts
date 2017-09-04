import {NgModule} from "@angular/core";
import {CompoundComponent} from "./compound/compound.component";
import {DataBrowseRoutingModule} from "./data-browse-routing.module";
import {PaginationModule} from "ngx-bootstrap";
import {CommonModule} from "@angular/common";
import {DataBrowseComponent} from "./data-browse/data-browse.component";
import {BrowseListComponent} from "./browse-list/browse-list.component";
import {FormsModule} from "@angular/forms";
import {UniportComponent} from "./uniport/uniport.component";


@NgModule({
  declarations: [
    DataBrowseComponent,
    CompoundComponent,
    BrowseListComponent,
    UniportComponent,
  ],
  imports: [
    FormsModule,
    DataBrowseRoutingModule,
    CommonModule,
    PaginationModule.forRoot()
  ],
  providers: []
})

export class DataBrowseModule {

}
