import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from "./error/page-not-found/page-not-found.component";
import { HelpComponent } from "./help/help/help.component"

const routes: Routes = [
  {
    path: 'help',
    component: HelpComponent,
  },

  {
    path: '**',
    component:PageNotFoundComponent
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModuel {

}
