import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CommonModule} from "@angular/common";
import {ErrorRoutingModule} from "./error-routing.module";


@NgModule({
  declarations:[PageNotFoundComponent],
  imports:[CommonModule, ErrorRoutingModule]
})

export class ErrorModule {

}
