import gql from "graphql-tag";
import {Component, OnInit} from "@angular/core";
import {QueryService} from "../../../service/query.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {allCompounds, CompoundNodeEdge, UniprotinfoNode, UniprotinfoNodeEdge} from "../../../models/models";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';
import {data} from 'apollo-client/data/store';

const myCompoundDetail = gql`
  query getCompoundDetail($id:ID!) {
    uniprot(id :$id) {
      compounds{
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
  }
`;

@Component({
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.css']
})

export class CompoundDetailComponent implements OnInit {
  edges: CompoundNodeEdge[];
  uniprot: UniprotinfoNode;
  compounds : allCompounds;


  constructor(private queryService: QueryService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.queryService.dataSearch(myCompoundDetail, params['id']))
      .subscribe(({data}) => {
        this.uniprot = data['uniprot'];
        this.compounds = this.uniprot.compounds;
        this.edges = this.compounds.edges;
      })
  }

}



