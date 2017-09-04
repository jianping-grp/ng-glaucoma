import gql from "graphql-tag";
import {Component, OnInit} from "@angular/core";
import {allCompound, CompoundNodeEdge, PageInfo} from "../../models/models";
import {PaginationService} from "../../service/pagination.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/distinctUntilChanged'



const myQuery = gql`
  query myCompound($firstNum: Int, $lastNum: Int, $afterStr: String, $beforeStr: String) {
    allCompound (first: $firstNum, last: $lastNum, after: $afterStr, before: $beforeStr) {
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
          drugbankId
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
  edges: any[];
  pageList: any[];
  endCursor: string;
  loading: boolean;
  hasNextPage: boolean;

  maxSize: number = 10;
  bigTotalItems: number;
  bigCurrentPage: number = 1;
  bigItemsPerPage: number = 10;
  finished : boolean;

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
    this.loading = true;
    this.paginationService.dataInit(myQuery, 'allCompound', 100, this.bigItemsPerPage)
      .subscribe( data => {
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
      this.paginationService.fetchMore(myQuery, 'allCompound', 100, this.endCursor, this.bigItemsPerPage)
        .distinctUntilChanged()
          .subscribe(data => {
            this.loading = data.loading;
            this.endCursor = data.endCursor;
            this.hasNextPage = data.hasNextPage;
            this.pageList = data.pageList;
            this.bigTotalItems = this.pageList.length * this.bigItemsPerPage;

            this.edges = this.pageList[event.page -1];
            this.finished = data.finished;
        })
    }
    this.edges = this.pageList[event.page - 1]
  }
}
