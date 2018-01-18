import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'tb-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  editable: Boolean;
  detail;
  constructor() {
  }

  ngOnInit() {
    this.editable = false;
    this.detail = 'test';
  }

  edit(){
    this.editable = true;
  }

  saveDetail(){
    this.editable = false;
  }

  undo() {
    this.editable = false;
  }
}
