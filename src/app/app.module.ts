import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { TaskComponent } from './core/component/task/task.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProjectDetailComponent } from './core/component/project-detail/project-detail.component';
import { ProjectTitleComponent } from './core/component/project-title/project-title.component';
import { DatePickerComponent } from './core/component/date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ProjectDetailComponent,
    ProjectTitleComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
