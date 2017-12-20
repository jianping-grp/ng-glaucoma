import {AfterViewChecked, ChangeDetectorRef, Component} from '@angular/core';
import {GlobalService} from "./service/global/global.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements  AfterViewChecked {
  title = 'GCDB';
  loadingStatus: boolean;
  constructor(private globalService: GlobalService,
              private cd: ChangeDetectorRef) {
    this.globalService.loadingStatus
      .subscribe(status => this.loadingStatus = status)
  }

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }

}
