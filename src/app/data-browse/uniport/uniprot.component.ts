import gql from "graphql-tag";
import {Component, OnInit} from "@angular/core";
import {Apollo, ApolloQueryObservable} from "apollo-angular";
import {data} from "apollo-client/data/store";
import {PaginationService} from "../../service/pagination.service";
import {Router} from "@angular/router";
import 'rxjs/add/operator/distinctUntilChanged';

const myQuery = gql`
    query myUniport($firstNum:Int,$lastNum:Int,$afterStr:String,$beforeStr:String){
      allUniprots(first:$firstNum,last:$lastNum,after:$afterStr,before:$beforeStr){
       pageInfo{
       hasNextPage,
       hasPreviousPage,
       startCursor,
       endCursor
       }
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
  templateUrl: './uniprot.component.html',
  styleUrls: ['./uniprot.component.css'],
})

export class UniprotComponent implements OnInit {
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

  constructor(private paginationService: PaginationService,
              private router: Router) {

  }

  ngOnInit(){
    this.loading = true;
    this.paginationService.dataInit(myQuery, 'allUniprots', 100, this.bigItemsPerPage)
      .subscribe(data =>{
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
      this.paginationService.fetchMore(myQuery, 'allUinprots', 100, this.endCursor, this.bigItemsPerPage)
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

  gotoCompoundDetail(id: any) {
    this.router.navigate(['/data-browse/compound-detail', id])
}

}
