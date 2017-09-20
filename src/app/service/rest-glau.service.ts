import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import {CompoundNode, UniprotinfoNode} from "../models/models";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestGlauService {
  private restUrl = 'http://localhost:8000/'; //Todo add api
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {

  }

  private fetchData(url: String): any {
    return this.http.get(`${this.restUrl}/$url`)
  }

  getCompound(smiles: String): Observable<CompoundNode> {
    return this.fetchData(`compound/${smiles}`)
      .map((res: Response) => res.json() || {})
      .catch(this.handleError);
  }

  getUniprot(entryname: String): Observable<UniprotinfoNode> {
    return this.fetchData(`uniprot/${entryname}`)
      .map((res: Response) => res.json() || {})
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Promise.reject(errMsg);
  }

}
