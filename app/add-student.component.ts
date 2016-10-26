import { Component } from '@angular/core';
import { OnInit }   from '@angular/core';
import { Http, Headers }   from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Student } from './Student'

@Component({
    moduleId: module.id,
    selector: 'addStudent',
    styleUrls: ['./css/course.component.css', './css/forms.css'],
    templateUrl: '/app/add-student.component.html'
})
export class AddStudentComponent{
    
    formVisible = true;
    studentsUrl = "/api/student";
    constructor(private router: Router, private http:Http) {


    }
    addNewStudent(studentFormValue) : void {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.studentsUrl, JSON.stringify(studentFormValue),{
            headers: headers
        }).toPromise().then(
            () => {
                alert('Student information added.');
                this.clearForm();
            });
    }

    clearForm() : void {
        this.formVisible = false;
        setTimeout(() => this.formVisible = true , 0);
    }
}