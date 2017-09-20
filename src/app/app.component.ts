import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'GLUACOMA';
  constructor(private location: Location) {

  }


}
