import {Component, OnInit} from "@angular/core";
import {RestService} from "../service/rest/rest.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  similarityValueList = [100, '>=99%', '>=97%', '>=95%', '>=90%', '>=85%', '>=80%', '>=70%', '>=60%', '>=50%'];

  structureSearchTypeList = [
    {value: 'structure', viewValue: 'Similarity', placeHolder: 'Similarity number of 0.5-1'},
    {value: 'substructure', viewValue: 'Substructure', placeHolder: '1'}
  ];
  selectedStructureType = this.structureSearchTypeList[0].value;
  selectedSimilarityValue = this.similarityValueList[0];

  constructor(private rest: RestService,
              private route: ActivatedRoute,
              private router: Router,
              ){
  };

  ngOnInit() {

  }

  goUniprotByName(keyword: string) {
    this.router.navigate(['uniprot-by-name'],{queryParams: {keyword: keyword}})
  }

  goProductByName(keyword: string) {
    this.router.navigate(['product-by-name'],{queryParams:{keyword: keyword}})
  }

  goTargetPredictionBySmiles(smiles: string) {
    this.router.navigate(['/target-prediction', smiles])
  }

  submit(smiles: string,) {
    console.log(smiles);
    let similarityValue;
    // transform selectedSimilarityValue to float;
    if(typeof this.selectedSimilarityValue === 'number' ) {
      similarityValue= 1;
    } else {
      similarityValue = parseInt(this.selectedSimilarityValue.slice(2)) /100;
    };
    console.log(typeof similarityValue);
    // selectedStructureType is 'structure' denotes structure search while 'substructure' denotes substructure search
    this.router.navigate(['/compound-by-smiles', smiles], {queryParams: {selectedStructureType: this.selectedStructureType,
      similarityValue: similarityValue}})
  }

}
