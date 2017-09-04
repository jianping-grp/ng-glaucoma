import {Injectable} from "@angular/core";
import {QueryService} from "./query.service";
import _ from 'lodash';


@Injectable()
export class PaginationService {
  allData: any;
  edges: any[]; //get the data only 1 page
  edges_all: any[]; //fetch some data, for instance 10 pages;
  edges_all_length: number;
  pageList: any[]; //create a new list includes 10 pages in one time. display 1 page firstly

  hasNextPage: boolean;
  endCursor: string;
  loading: boolean;
  finished: boolean;

  constructor(private queryService: QueryService) { }

  dataInit(query: any, queryCategory: string, contentNum_AllPages: number, contentNum_everyPage: number) {
    this.pageList = [];
    return this.queryService.dataFetch(query, contentNum_AllPages)
      .map(({data, loading}) => {
      this.loading = loading;
      this.allData = data[queryCategory];
      this.edges_all = this.allData.edges;
      this.edges_all_length = this.edges_all.length;

      this.endCursor = this.allData.pageInfo.endCursor;
      this.hasNextPage = this.allData.pageInfo.hasNextPage;

      this.pageList = _.chunk(this.edges_all, contentNum_everyPage);
      this.finished = true;
      return {
        finished: this.finished,
        loading: this.loading,
        endCursor: this.endCursor,
        hasNextPage: this.hasNextPage,
        pageList: this.pageList,
      };
      });
  }

  fetchMore(query: any, queryCategory: string, contentNum_AllPages: number, lastCursor: string, contentNum_everyPage: number) {
    return this.queryService.dataFetch(query, contentNum_AllPages, lastCursor)
      .map(({data, loading}) => {
      this.loading = loading;
      this.allData = data[queryCategory];
      this.edges_all = this.allData.edges;
      this.edges_all_length = this.edges_all.length;

      this.endCursor = this.allData.pageInfo.endCursor;
      this.hasNextPage = this.allData.pageInfo.hasNextPage;

      //get this page_list
      let addedList = _.chunk(this.edges_all, contentNum_everyPage);
      this.pageList = this.pageList.concat(addedList);
      this.finished = true;

      return {
        finished: this.finished,
        loading: this.loading,
        endCursor: this.endCursor,
        hasNextPage: this.hasNextPage,
        pageList: this.pageList,
      }
    })
  }
}
