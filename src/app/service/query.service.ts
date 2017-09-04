import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";

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
}
