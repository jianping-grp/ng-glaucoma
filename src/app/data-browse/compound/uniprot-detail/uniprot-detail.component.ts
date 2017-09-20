import gql from "graphql-tag";
import {Component,OnInit} from "@angular/core";
import {allUniprots, CompoundNode, UniprotinfoNode, UniprotinfoNodeEdge} from "../../../models/models"
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import {QueryService} from "../../../service/query.service";
import 'rxjs/add/operator/switchMap';



const myUniprotDetail = gql`
  query getUniprotDetail($id: ID!) {
    compound(id: $id){
      uniprotinfoSet{
        edges{
          node{
            id,
            entry,
            entryname
          }
        }
      }
    }
  }
`;

@Component({
  templateUrl: './uniprot-detail.component.html',
  styleUrls: ['./uniprot-detail.component.css']
})

export class UniprotDetailComponent implements OnInit {
  compoundId: any;
  compound: CompoundNode;
  edges: UniprotinfoNodeEdge[];
  uniprotinfoSet: allUniprots;

  constructor(private quertService: QueryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((params: Params) =>
        this.quertService.dataSearch(myUniprotDetail, params['id']))
      .subscribe(({data}) => {
        this.compound = data['compound'];
        this.uniprotinfoSet = this.compound.uniprotinfoSet;
        this.edges = this.uniprotinfoSet.edges;
      })
  }



}



// export class UniprotinfoComponent implements OnInit {
//   idObj: any;
//   idString: string;
//   idList: any[];
//   uniprotinfo: UniprotinfoNode;
//   uniprotinfos: UniprotinfoNode[] = [];
//
//   constructor(private activetedRoute: ActivatedRoute,
//               private queryService: QueryService) {
//
//   }
//
//   ngOnInit() {
//     this.idObj = this.activetedRoute.snapshot.params;
//     this.idString = this.idObj.IdList;
//     this.idList = this.idString.split(',');
//     for (let id of this.idList) {
//       this.queryService.dataSearch(myUniprotinfo, id)
//         .subscribe(({data}) => {
//           this.uniprotinfo = data['uniprot'];
//           this.uniprotinfos.push(this.uniprotinfo)
//         })
//     }
//   }
// }



