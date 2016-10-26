import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Course} from './model/Course'

@Injectable()
export class CourseService{
    private headers = new Headers({'Content-Type': 'application/json'});
    courses: Course[];
    constructor(private http: Http) { }

    getCourses(){
        let headers = new Headers();
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Pragma", "no-cache");
        headers.append("Expires", "0");
        return this.http.get('/api/course', {headers: headers}).toPromise();
    }
    addCourses(newCourse){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')
        return this.http.post('/api/course',JSON.stringify( newCourse),{headers:headers})
            .map(res=>res.json());
    }

    daleteCourse(id){
        return this.http.delete('/api/course/' + id)
            .map(res=>res.json());
    }

}