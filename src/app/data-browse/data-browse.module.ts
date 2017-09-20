import {NgModule} from "@angular/core";
import {CompoundComponent} from "./compound/compound.component";
import {DataBrowseRoutingModule} from "./data-browse-routing.module";
import {PaginationModule} from "ngx-bootstrap";
import {CommonModule} from "@angular/common";
import {DataBrowseComponent} from "./data-browse/data-browse.component";
import {BrowseListComponent} from "./browse-list/browse-list.component";
import {FormsModule} from "@angular/forms";
import {UniprotComponent} from "./uniport/uniprot.component";
import {UniprotDetailComponent} from "./compound/uniprot-detail/uniprot-detail.component";
import {CompoundDetailComponent} from "./uniport/compound-detail/compound-detail.component";


@NgModule({
  declarations: [
    BrowseListComponent,
    DataBrowseComponent,
    CompoundComponent,
    UniprotDetailComponent,
    UniprotComponent,
    CompoundDetailComponent,
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
