import {Component, OnInit} from "@angular/core";
import {RestService} from "../../service/rest/rest.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UniprotAllPathway} from "../../models/uniprot-all-pathway";
import {PageMeta} from "../../models/page-meta";
import {GlobalService} from "../../service/global/global.service";

@Component({
  templateUrl: 'uniprot-all-pathway.component.html',
  styleUrls: ['uniprot-all-pathway.component.css']
})

export class UniprotAllPathwayComponent implements OnInit {
  uniprotAllPathways: UniprotAllPathway[];
  includeParam = '';
  pageMeta : PageMeta | null;
  loadingStatus: boolean;
  isEmpty = false;

  constructor(private rest: RestService,
              private route: ActivatedRoute,
              private globalService: GlobalService
              ) {
    this.globalService.loadingStatus
      .subscribe(status => this.loadingStatus = status)
  }

  ngOnInit() {
    console.log('uniprot-all-pathways init');
    this._getUniprotAllPathway()
  }

  private _getUniprotAllPathway(page?, perPage?): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
      this.rest.getUniprotAllPathwaysByUid(params.get('id'), this.includeParam, 0, 999999)
        .subscribe( data => {
          console.log('id:', params.get('id'));
          this.uniprotAllPathways = data['uniprot_all_pathways'];
          this.pageMeta = data['meta'];

          //if uniprotAllPathways is empty, no display
          if (this.uniprotAllPathways.length === 0) {
            this.isEmpty = true;
          }
        },
          error => {},
        () => {},
        )
      })
  }


}


