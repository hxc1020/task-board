import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailToolComponent } from './task-detail-tool.component';

describe('TaskDetailToolComponent', () => {
  let component: TaskDetailToolComponent;
  let fixture: ComponentFixture<TaskDetailToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDetailToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
