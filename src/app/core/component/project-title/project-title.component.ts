import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'tb-project-title',
  templateUrl: './project-title.component.html',
  styleUrls: ['./project-title.component.css']
})
export class ProjectTitleComponent implements OnInit {
  active;

  constructor() {
  }

  ngOnInit() {

  }

  showDetail() {
    this.active = true;
  }

  hideDetail() {
    this.active = false;
  }
}
