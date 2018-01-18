import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'tb-project-title',
  templateUrl: './project-title.component.html',
  styleUrls: ['./project-title.component.css']
})
export class ProjectTitleComponent implements OnInit {
  active;
  schedule;
  isFocus: Boolean;
  constructor() {
  }

  ngOnInit() {
    this.schedule = '开始于明天';
    this.isFocus = false;
  }

  onMouseEnter() {
    // lightblue
    this.isFocus = true;
  }

  onMouseLeave() {
    this.isFocus = false;
  }

  showDetail() {
    this.active = true;
  }

  hideDetail() {
    this.active = false;
  }
}
