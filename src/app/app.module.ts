
import { NgModule } from '@angular/core';
import { BrowserModule} from "@angular/platform-browser"
import { AppComponent } from './app.component';
import {HelpModule} from "./help/help.module";
import {AppRoutingModule} from "./app-routing.module";
import ApolloClient from "apollo-client/ApolloClient";
import {createNetworkInterface} from "apollo-client"
import {ApolloModule} from "apollo-angular";
import {PaginationModule} from "ngx-bootstrap";
import {DataBrowseModule} from "./data-browse/data-browse.module"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QueryService} from "./service/query.service";
import {PaginationService} from "./service/pagination.service";
import {HttpModule} from "@angular/http";
import {ContactModule} from "./contact/contact.module";
import {SearchModule} from "./search/search.module";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";
import {RestGlauService} from "./service/rest-glau.service";
import {HomeComponent} from "./home/home/home.component";


const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8000/graphql'
  })
});
export function provideClient(): ApolloClient {
  return client;
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SearchModule,
    HelpModule,
    ContactModule,
    DataBrowseModule,
    ApolloModule.forRoot(provideClient),
    PaginationModule.forRoot(),
  ],
  providers: [QueryService, PaginationService, RestGlauService],
  bootstrap: [AppComponent]
})
export class AppModule { }
