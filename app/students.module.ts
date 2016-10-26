import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentsComponent } from './students.component';
import { HttpModule }   from '@angular/http';
import './rxjs-extensions';

//
@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ StudentsComponent ],
  bootstrap:    [ StudentsComponent ]
})
export class StudentsModule { }