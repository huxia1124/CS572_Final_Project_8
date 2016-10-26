import { Component } from '@angular/core';
import { Student }  from './Student';
import { OnInit }   from '@angular/core';
import { Http, Headers }   from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
    moduleId: module.id,
    selector: 'studentsList',
    styleUrls: ['./css/course.component.css'],
    templateUrl: '/app/students.component.html'
})
export class AllStudentsComponent extends OnInit{
  students: Student[];
  studentsUrl = "/api/student";

  constructor(private router: Router, private http:Http) {
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

    gotoDetail():void {
        let link = ['/viewDetails'];
        this.router.navigate(link);
    }

    gotoAdd():void {
        let link = ['/addStudent'];
        this.router.navigate(link);
    }

 }