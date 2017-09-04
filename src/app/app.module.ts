
import { NgModule } from '@angular/core';
import { BrowserModule} from "@angular/platform-browser"
import { AppComponent } from './app.component';
import {ErrorModule} from "./error/error.module";
import {HelpModule} from "./help/help.module";
import {AppRoutingModule} from "./app-routing.module";
import ApolloClient from "apollo-client/ApolloClient";
import {createNetworkInterface} from "apollo-client"
import {ApolloModule} from "apollo-angular";
import {PaginationModule} from "ngx-bootstrap";
import {DataBrowseModule} from "./data-browse/data-browse.module"
import {FormsModule} from "@angular/forms";
import {QueryService} from "./service/query.service";
import {PaginationService} from "./service/pagination.service";
import {HttpModule} from "@angular/http";


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
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    HelpModule,
    ErrorModule,
    AppRoutingModule,
    DataBrowseModule,
    ApolloModule.forRoot(provideClient),
    PaginationModule.forRoot(),
  ],
  providers: [QueryService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
