import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {RestService} from "../../../service/rest/rest.service";
import {Products} from "../../../models/products";
import {PageMeta} from "../../../models/page-meta";
import {ProductListDataSource} from "../product-list.data.source";
import {GlobalService} from "../../../service/global/global.service";

@Component({
  templateUrl: './product-by-name.component.html',
  styleUrls: ['./product-by-name.component.css']
})

export class ProductByNameComponent implements OnInit {
  products: Products[] | null;
  displayedColumns: string[];
  productDataSource: ProductListDataSource;
  pageMeta: PageMeta | null;
  includeParam = '';
  loadingStatus: boolean;
  isEmpty = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private rest: RestService,
              private gloableService: GlobalService) {
    this.displayedColumns = [
      'generic_name', 'name', 'formula', 'mol_weight', 'alogp', 'hba', 'hbd',
      'rtb', 'psa', 'drug_status', 'drugbank_id', 'uniprotinfo_set'
    ];
    this.gloableService.loadingStatus
      .subscribe(status => this.loadingStatus = status);
  }

  ngOnInit() {
    console.log('compound by name');
    this._getProductsByName();
  }

  goUniprotByCid(id: any) {
    this.router.navigate(['/uniprot-by-cid',id])
  }

  private _getProductsByName(page?, perPage?): void {
   this.route.queryParamMap
     .subscribe((params: ParamMap) => {
     if (params.has('keyword')) {
       let keyword = params.get('keyword');
       console.log(`retrieve compound by keyword: ${keyword}`);
       this.rest.getProductsByName(keyword, this.includeParam, page, perPage)
         .subscribe(data => {
           this.products = data['products'];
           this.productDataSource = new ProductListDataSource(this.products);
           this.pageMeta = data['meta'];

           //if products is empty, no display
           if (this.products.length === 0) {
             this.isEmpty = true;
           }
         },
       error => {},
           () => {})
     }
     })
  }

  pageChange(event) {
    this._getProductsByName(event.pageIndex, event.pageSize)
  }
}
