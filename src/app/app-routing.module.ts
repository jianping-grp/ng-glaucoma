import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from "./error/page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: 'browse',
    loadChildren: 'app/data-browse/data-browse.module#DataBrowseModule'
  },
  {
    path: 'help',
    loadChildren: 'app/help/help.module#HelpModule'
  },

  {
    path: '**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
