import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";
import {HomeComponent} from "./home/home.component";
import {CompoundListComponent} from "./data/compound/compound-list/compound-list.component";
import {UniprotListComponent} from "./data/uniprot/uniprot-list/uniprot-list.component";
import {ProductListComponent} from "./data/product/product-list/product-list.component";
import {UniprotByNameComponent} from "./data/uniprot/uniprot-by-name/uniprot-by-name.component";
import {ProductByNameComponent} from "./data/product/product-by-name/product-by-name.component";
import {UniprotByCidComponent} from "./data/uniprot/uniprot-by-cid/uniprot-by-cid.component";
import {CompoundByUidComponent} from "./data/compound/compound-by-uid/compound-by-uid.component";
import {CompoundBySmilesComponent} from "./data/compound/compound-by-smiles/compound-by-smiles.component";
import {UniprotAllPathwayComponent} from "./data/uniprot-all-pathways/uniprot-all-pathway.component";
import {UniprotDbCompoundComponent} from "./data/uniprot-db-compound/uniprot-db-compound.component";
import {UniprotByChemblIdComponent} from "./data/uniprot/uniprot-by-chembl-id/uniprot-by-chembl-id.component";
import {TargetPredictionComponent} from "./data/tatget-prediction/target-prediction.component";
import {SearchComponent} from "./search/search.component";
import {HelpComponent} from "./help/help/help.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,},
  {path: 'search', component: SearchComponent},

  {path: 'compound-list', component: CompoundListComponent,},
  {path: 'uniprot-list', component: UniprotListComponent,},
  {path: 'product-list', component: ProductListComponent,},
  {path: 'uniprot-by-cid/:id', component: UniprotByCidComponent,},
  {path: 'compound-by-uid/:id', component: CompoundByUidComponent,},
  {path: 'product-by-name', component: ProductByNameComponent,},
  {path: 'uniprot-by-name', component: UniprotByNameComponent,},
  {path: 'compound-by-smiles/:smiles', component: CompoundBySmilesComponent,},
  {path: 'uniprot-all-pathway/:id', component: UniprotAllPathwayComponent,},
  {path: 'uniprot-db-compound', component: UniprotDbCompoundComponent,},
  {path: 'target-prediction/:smiles', component: TargetPredictionComponent,},
  {path: 'uniprot-by-chembl-id/:chemblId', component: UniprotByChemblIdComponent,},
  // {path: 'search', loadChildren: 'app/search/search.module#SearchModule'},
  {path: 'help', component: HelpComponent},
  {path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule'},
  // {path: 'data-browse', loadChildren: 'app/data-browse/data-browse.module#DataBrowseModule',
  // data: {preload: true}},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  exports: [RouterModule],
  providers: [SelectivePreloadingStrategy]
})

export class AppRoutingModule {

}
