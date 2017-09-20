import gql from "graphql-tag";
import {Component, OnInit} from "@angular/core";
import {allCompounds, UniprotinfoNodeEdge, CompoundNodeEdge, CompoundNode} from "../../models/models";
import {PaginationService} from "../../service/pagination.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/distinctUntilChanged'
import {Router} from "@angular/router";



const myQuery = gql`
  query myCompound($firstNum: Int, $lastNum: Int, $afterStr: String, $beforeStr: String) {
    allCompounds (first: $firstNum, last: $lastNum, after: $afterStr, before: $beforeStr) {
      pageInfo{
        hasNextPage,
        startCursor,
        endCursor,
        hasPreviousPage
        }
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
          uniprotinfoSet{
            edges{
              node{
                id
              }
            }
          }
        }
      } 
    }
  }     
`;
@Component({
  templateUrl: './compound.component.html',
  styleUrls:['./compound.component.css'],
})

export class CompoundComponent implements OnInit {
  selectedEdge: CompoundNodeEdge;
  node: CompoundNode;

  edges: any[]; //get the data only 1 page in the data we fetched just now;
  pageList: any[]; //create a new list inclues 10 pages in one time, displaying 1 page firstly.
  endCursor: string;
  loading: boolean;
  hasNextPage: boolean;

  maxSize: number = 10; //limit number for page links in pager
  bigTotalItems: number;  //total number of items in all pages
  bigCurrentPage: number = 1; // current page
  bigItemsPerPage: number = 10; //maximum number of item per page. If value less than 1 will display all items on one page
  finished: boolean;

  constructor(private paginationService: PaginationService,
              private router: Router) {

  }

  ngOnInit() {
    this.loading = true;
    this.paginationService.dataInit(myQuery, 'allCompounds', 100, this.bigItemsPerPage)
      .subscribe(data => {
        this.loading = data.loading;
        this.endCursor = data.endCursor;
        this.hasNextPage = data.hasNextPage;

        this.pageList = data.pageList;
        this.finished = data.finished;

        this.bigTotalItems = this.pageList.length * this.bigItemsPerPage;
        this.edges = this.pageList[0];
      });
  }

  pageChanged(event: any): void {
    if (event.page > this.pageList.length - Math.floor(this.maxSize / 2) && this.hasNextPage && this.finished) {
      this.finished = false;
      this.loading = true;
      this.paginationService.fetchMore(myQuery, 'allCompounds', 100, this.endCursor, this.bigItemsPerPage)
        .distinctUntilChanged()
        .subscribe(data => {
          this.loading = data.loading;
          this.endCursor = data.endCursor;
          this.hasNextPage = data.hasNextPage;
          this.pageList = data.pageList;
          this.bigTotalItems = this.pageList.length * this.bigItemsPerPage;

          this.edges = this.pageList[event.page - 1];
          this.finished = data.finished;
        })
    }
    this.edges = this.pageList[event.page - 1]
  }


  gotoUniprotDetail(id: any) {
    this.router.navigate(['/data-browse/uniprot-detail', id])
  }

}

// gotoUniprotinfo(terms: CompoundNodeEdge[]) {
//     let idList = [];
//     for (let term of terms) {
//       idList.push(term.node.id)
//     }
//     this.router.navigate(['/browse/compound', {IdList: idList}])
// }


