import {NgModule} from "@angular/core";
import {SearchComponent} from "./search/search.component";
import {CommonModule} from "@angular/common";
import {SearchRoutingModule} from "./search-routing.module";

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
  ]
})

export class SearchModule {

}
