import {Component, OnInit} from "@angular/core";
import {RestService} from "../../service/rest/rest.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UniprotDbCompound} from "../../models/uniprot-db-compound";
import {PageMeta} from "../../models/page-meta";
import {Uniprot} from "../../models/uniprot";
import {GlobalService} from "../../service/global/global.service";

@Component({
  templateUrl: './uniprot-db-compound.component.html',
  styleUrls: ['./uniprot-db-compound.component.css']
})

export class UniprotDbCompoundComponent implements OnInit {
  drugs = [];
  uniprots: Uniprot[];
  uniprotDbCompounds: UniprotDbCompound[];
  includeParam = '';
  pageMeta: PageMeta | null;
  loadingStatus: boolean;
  isEmpty=false;

  constructor(private rest: RestService,
              private route: ActivatedRoute,
              private globalService: GlobalService) {
    this.globalService.loadingStatus
      .subscribe(status => this.loadingStatus = status)

  }

  ngOnInit() {
    console.log('uniprot-db-compound init');
    this._getUniprotDbCompound();
  }

  private _getUniprotDbCompound(page?, perPage?):void {
    this.rest.getUniprotDbCompound(this.includeParam, page, perPage)
      .subscribe(data => {
        this.uniprotDbCompounds = data['uniprot_db_compounds'];
        this.uniprots = data['uniprot_infos'];
        this.pageMeta = data['meta'];

        for (let dbCompound of this.uniprotDbCompounds){
          let chembl_id;
          // let drugs= [];
          chembl_id = this.uniprots.find(uniprot=> uniprot.id == dbCompound.uniprot_name).uniprot_chembl_id;
          dbCompound['chembl_id'] = chembl_id;
          this.drugs.push(dbCompound);
        }
      })
  }


  pageChange(event) {
    this.drugs=[];
    this._getUniprotDbCompound(event.pageIndex, event.pageSize);
  }
}
