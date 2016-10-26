import { Component } from '@angular/core';
import { Student }  from './Student';
import { OnInit }   from '@angular/core';
import { Http, Headers }   from '@angular/http';
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
    let headers = new Headers();
    headers.append("Cache-control", "no-cache");
    headers.append("Cache-control", "no-store");
    headers.append("Pragma", "no-cache");
    headers.append("Expires", "0");

    this.http.get(this.studentsUrl, {headers: headers}).toPromise().then(
      response => {
        let body = response.json();
        
        this.students = response.json() as Student[];
        console.log(JSON.stringify(this.students));
      });
      
  }

  deleteStudent(id:string) : void {
     this.http.delete(this.studentsUrl + "/" + id).toPromise().then(
       ()=>{this.students = this.students.filter(s => s["_id"] != id)} 
     )
  }

 }