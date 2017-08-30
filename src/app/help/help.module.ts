import {NgModule} from "@angular/core";
import {HelpComponent} from "./help/help.component";
import {CommonModule} from "@angular/common";
import {HelpRoutingModule} from "./help-routing.module";

@NgModule({
  declarations: [HelpComponent],
  imports: [CommonModule, HelpRoutingModule]
})

export class HelpModule {

}
