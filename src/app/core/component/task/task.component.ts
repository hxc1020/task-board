import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'tb-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  _checked;
  isFocus: Boolean;
  isFlag: Boolean;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  @HostListener('mouseenter') onMouseEnter() {
    // lightblue
    this.isFocus = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isFocus = false;
  }

  changeFlag() {
    this.isFlag = !this.isFlag;
  }
}
