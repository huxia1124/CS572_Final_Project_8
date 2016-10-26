import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentsComponent } from './students.component';
import { HttpModule }   from '@angular/http';
import { AppComponent }     from './app.component';
import './rxjs-extensions';

//
@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, StudentsComponent ],
  bootstrap:    [ AppComponent, StudentsComponent ]
})
export class AppModule { }