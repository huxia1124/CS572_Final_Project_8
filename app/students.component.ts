import { Component } from '@angular/core';
import { Student }  from './Student';
import { OnInit }   from '@angular/core';
import { Http }   from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'students',
  templateUrl: '/app/students.component.html'
})
export class StudentsComponent extends OnInit{
  students: Student[];
  studentsUrl = "/api/student";

  constructor(private http:Http) {
    super();
  }

  ngOnInit() : void {
   /* this.http.get(this.studentsUrl).toPromise().then(
      response => {

        //this.students = response.json().data as Student[];
        //console.log(JSON.stringify(this.students));
      });
      */
  }

 }