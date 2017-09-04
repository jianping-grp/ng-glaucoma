import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class GlauRestService {
  private restUrl = 'http://localhost:8000/api';

  constructor(private http: Http) {

  }



}
