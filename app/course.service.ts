import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Course} from './model/Course'

@Injectable()
export class CourseService{
    private headers = new Headers({'Content-Type': 'application/json'});
    private courseUrl = 'api/course';  // URL to web api

    constructor(private http: Http) { }

    getCourses(): Promise<Course[]> {
        return this.http.get(this.courseUrl)
            .toPromise()
            .then(response => response.json().data as Course[])
            .catch(this.handleError);
    }
    /*getCourses(){
        return this.http.get('/api/course')
            .map(res => res.json());
    }*/

    /*getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }*/
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}