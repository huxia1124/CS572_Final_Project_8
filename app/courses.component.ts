import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'courseDetails',
    templateUrl: './views/course.html',
    styleUrls: ['./css/course.component.css']
})

export class CoursesComponent implements OnInit {

    constructor(private router: Router) { }
    ngOnInit(): void {

    }

    gotoDetail():void {
        let link = ['/viewCourses'];
        this.router.navigate(link);
    }

    gotoAdd():void {
        let link = ['/addCourse'];
        this.router.navigate(link);
    }
}
