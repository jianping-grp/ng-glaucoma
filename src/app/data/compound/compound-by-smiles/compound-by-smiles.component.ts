import {Component, OnInit} from "@angular/core";
import {RestService} from "../../../service/rest/rest.service";
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Compound} from "../../../models/compound";
import {CompoundsListDataSource} from "../compounds-list.data.source";
import {PageMeta} from "../../../models/page-meta";
import {GlobalService} from "../../../service/global/global.service";

@Component({
  templateUrl: './compound-by-smiles.component.html',
  styleUrls: ['./compound-by-smiles.component.css']
})

export class CompoundBySmilesComponent implements OnInit {
  compounds: Compound[];
  compoundDataSource: CompoundsListDataSource;
  displayedColumns: string[];
  pageMeta: PageMeta | null;
  includeParam='?exclude[]=uniprotinfo_set.*&include[]=uniprotinfo_set.id'; //use for count uniprot
  loadingStatus: boolean;
  isEmpty = false;


  constructor(private rest: RestService,
              private route: ActivatedRoute,
              private router: Router,
              private globalService:GlobalService
              ){
    this.displayedColumns = [
      'generic_name', 'formula', 'mol_weight', 'alogp', 'hba', 'hbd',
      'rtb', 'psa', 'drug_status', 'drugbank_id', 'uniprotinfo_set'
    ];
    this.globalService.loadingStatus
      .subscribe(status => this.loadingStatus = status)
  }

  ngOnInit() {
    console.log('compound by smiles init');
    this._postCompound();

  }

  goUniprotByCid(id: any) {
    this.router.navigate(['/uniprot-by-cid', id])
  }

  private _postCompound(page?, perPage?): void {
    this.route.queryParamMap
      .subscribe((params: ParamMap) => {
        //fetch data base queryParams
        // selectedStructureType is 'structure' denotes structure search while 'substructure' denotes substructure search
        if (params.has('selectedStructureType')) {
          //fetch similarityValue and transform number;
          let similarity = +params.get('similarityValue');
            console.log(params.has('similarityValue'));
          if (params.get('selectedStructureType') === 'structure') {
            this.route.params
              .switchMap((params: Params) => this.rest.postCompoundByStructure(params['smiles'], similarity, this.includeParam, page, perPage))
              .subscribe(data => {
                  this.compounds = data['compounds'];
                  this.compoundDataSource = new CompoundsListDataSource(this.compounds);
                  this.pageMeta = data['meta'];
                  console.log('data:',data);

                  //if data is empty, no display
                if (data.length === 0) {
                  this.isEmpty = true;
                }

                },
                error => {
                },
                () => {
                })
          }else if(params.get('selectedStructureType') === 'substructure') {
            this.route.params
              .switchMap((params: Params) => this.rest.postCompoundBySubstructure(params['smiles'], this.includeParam, page, perPage))
              .subscribe(data => {
                  this.compounds = data['compounds'];
                  this.compoundDataSource = new CompoundsListDataSource(this.compounds);
                  this.pageMeta = data['meta'];

                  //if data is empty, no display
                if (data.length === 0) {
                  this.isEmpty = true;
                }
                },
                error => {
                },
                () => {
                })
          }
        }
      })
  }


  pageChange(event) {
    this._postCompound(event.pageIndex, event.pageSize)
  }
}
