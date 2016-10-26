import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentsComponent } from './students.component';
import { HttpModule }   from '@angular/http';
import { AppComponent }     from './app.component';
import {CoursesComponent} from './courses.component'
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module'
import { CourseAddComponent }     from './course-add.component'
import {CourseViewComponent} from './course-view.component'
import {CourseService} from './course.service'
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import './rxjs-extensions';

//
@NgModule({
  imports:      [ BrowserModule, HttpModule ,AppRoutingModule,FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, StudentsComponent, CoursesComponent, CourseAddComponent, CourseViewComponent ],
  bootstrap:    [ AppComponent],
  providers : [CourseService]
})
export class AppModule { }