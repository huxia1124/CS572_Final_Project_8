import { Component } from '@angular/core';
import { Student }  from './Student';
import { OnInit }   from '@angular/core';
import { Http, Headers }   from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  //selector: 'students',
    moduleId: module.id,
    selector: 'courseDetails',
    templateUrl: './views/student.html',
    styleUrls: ['./css/course.component.css']
  //templateUrl: '/app/students.component.html'
})
export class StudentsComponent extends OnInit{
  students: Student[];
  studentsUrl = "/api/student";

  constructor(private router: Router, private http:Http) {
    super();
  }

  ngOnInit() : void {

  }

  deleteStudent(id:string) : void {
     this.http.delete(this.studentsUrl + "/" + id).toPromise().then(
       ()=>{this.students = this.students.filter(s => s["_id"] != id)} 
     )
  }

    gotoList():void {
        let link = ['/viewAllStudents'];
        this.router.navigate(link);
    }

    gotoAdd():void {
        let link = ['/addStudent'];
        this.router.navigate(link);
    }

 }