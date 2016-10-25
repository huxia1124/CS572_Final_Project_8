import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentsComponent } from './students.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ StudentsComponent ],
  bootstrap:    [ StudentsComponent ]
})
export class AppModule { }