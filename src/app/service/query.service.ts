import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {variable} from "@angular/compiler/src/output/output_ast";

@Injectable()
export class QueryService {
  constructor(private apollo : Apollo) { }

  dataFetch(query: any, firstnum?: number, afterstr?: string, lastnum?: number, beforestr?: string) {
    return this.apollo.watchQuery({
      query: query,
      variables: {
        firstNum: firstnum,
        afterStr: afterstr,
        beforeStr: beforestr,
        lastNum: lastnum
      }
    })
  }

  dataSearch(query: any, Id: any) {
    return this.apollo.watchQuery({
      query: query,
      variables: {
        id: Id
      }
    })
  }

  dataQuery(query: any) {
    return this.apollo.watchQuery({
      query: query
    })
  }
}
