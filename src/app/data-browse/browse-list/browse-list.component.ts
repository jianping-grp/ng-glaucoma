import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.css']
})

export class BrowseListComponent implements OnInit {
  title = 'Browse the Database';
  constructor() { }

  ngOnInit() { }
}
