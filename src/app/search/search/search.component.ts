import {Component, OnInit} from "@angular/core";
import gql from "graphql-tag";
import {QueryService} from "../../service/query.service";
import {data} from "apollo-client/data/store";
import {allUniprots, CompoundNode, UniprotinfoNodeEdge} from "../../models/models";
import {RestGlauService} from "../../service/rest-glau.service";
import {error} from "selenium-webdriver";

declare function jsme(): any;
declare function jsmeOnLoad(): any;
declare function show_smiles(): any;

const myCompoundId = gql`
  query getCompoundId{
    allcompound{
      edges{
        node{
          id,
          genericName,
          IUPACName,
          smiles,
          image,
          molWeight,
          cas,
          drugbankId,
        }
      }
    }
  }
`

const mySmiles = gql`
  query getSmiles($smiles: String!){
    compound(smiles: $smiles){
      id,
      genericName,
      IUPACName,
      smiles,
      image,
      molWeight,
      cas,
      drugbankId, 
      uniprotinfoSet{
        edges{
          node{
            id
          }
        }
      }    
    }
  }
`
@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  loading: boolean = true;
  errorMsg: string;
  compound: CompoundNode;
  uniportinfoSet: allUniprots;
  edges:UniprotinfoNodeEdge[];
  constructor(private queryService: QueryService,
              private restGluaService: RestGlauService) {

  }

  ngOnInit() {
    jsme();
  }

  getSmiles(smiles:any) {
    this.restGluaService.getCompound(smiles)
      .subscribe(compound => {
        console.log('选中的compound信息', compound)
        this.compound = compound;
        this.uniportinfoSet = compound.uniprotinfoSet;
        this.edges = this.uniportinfoSet.edges;
        this.loading = true;
      },
        error => this.errorMsg = error)

  }


}
