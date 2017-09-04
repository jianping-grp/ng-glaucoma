import gql from "graphql-tag";
import {Component, OnInit} from "@angular/core";
import {Apollo, ApolloQueryObservable} from "apollo-angular";
import 'rxjs/add/operator/map';
import {data} from "apollo-client/data/store";

const myQuery = gql`
    query myUniport{
      allUniprotinfo{
        edges{
          node{
            id,
            entry,
            entryname,
            
      }
    }
  }
 }
`;
@Component({
  templateUrl: './uniport.component.html',
  styleUrls: ['./uniport.component.css']
})

export class UniportComponent implements OnInit {


  edges:any[];

  constructor(private apollo: Apollo) { }

  ngOnInit(){
    this.apollo.watchQuery({query: myQuery})
      .subscribe(data =>{
        this.edges = data[myQuery].edges;
      })
  }
}
