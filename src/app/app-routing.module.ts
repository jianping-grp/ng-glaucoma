import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from "./error/page-not-found/page-not-found.component";
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy"
import {HomeComponent} from "./home/home/home.component"
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'data-browse',
    loadChildren: 'app/data-browse/data-browse.module#DataBrowseModule',
    data: {preload: true}
  },
  {
    path: 'search',
    loadChildren: 'app/search/search.module#SearchModule'
  },
  {
    path: 'help',
    loadChildren: 'app/help/help.module#HelpModule'
  },
  {
    path: 'contact',
    loadChildren: 'app/contact/contact.module#ContactModule'
  },
  {
    path: '**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  exports:[RouterModule],
  providers: [SelectivePreloadingStrategy]
})

export class AppRoutingModule {

}
