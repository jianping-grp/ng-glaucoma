import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ErrorModule} from "./error/error.module";
import {HelpModule} from "./help/help.module";
import {AppRoutingModuel} from "./app-routing.module";
import ApolloClient from "apollo-client/ApolloClient";
import {createNetworkInterface} from "apollo-client"
import {ApolloModule} from "apollo-angular";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://lacalhost:8000/GlUACOMA/graghql'
  })
});
export function provideCient(): ApolloClient {
  return client;
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HelpModule,
    ErrorModule,
    AppRoutingModuel,
    ApolloModule.forRoot(provideCient)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
