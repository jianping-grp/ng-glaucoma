
import { NgModule } from '@angular/core';
import { BrowserModule} from "@angular/platform-browser"
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {
  MatButtonModule, MatCheckboxModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule, MatSelectModule, MatSidenavModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {ContactModule} from "./contact/contact.module";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";
import {RestService} from "./service/rest/rest.service";
import {GlobalService} from "./service/global/global.service";
import {JsmeModule} from "./jsme/jsme.module";

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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HelpComponent} from "./help/help/help.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HelpComponent,
    CompoundListComponent,
    UniprotListComponent,
    ProductListComponent,
    UniprotByCidComponent,
    CompoundByUidComponent,
    ProductByNameComponent,
    UniprotByNameComponent,
    CompoundBySmilesComponent,
    UniprotAllPathwayComponent,
    UniprotDbCompoundComponent,
    TargetPredictionComponent,
    UniprotByChemblIdComponent,
    PageNotFoundComponent,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    FormsModule,
    JsmeModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ContactModule,

    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatSelectModule,
    MatGridListModule,
  ],
  providers: [GlobalService , RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
