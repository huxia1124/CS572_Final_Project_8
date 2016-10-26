import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params }  from '@angular/router'
import { Location }   from '@angular/common'
import {Course} from './model/Course'
import {CourseService} from './course.service'

@Component({
    moduleId: module.id,
    selector: 'view-course',
    templateUrl: './views/viewCourse.component.html',
    styleUrls: ['./css/forms.css']
})

export class CourseViewComponent implements OnInit{
    courses : Course[];

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private courseService : CourseService
    ) {
        this.courseService.getCourses()
            .then(course=>this.courses=course);

        /*this.courseService.getCourses()
            .subscribe(course=> {
                this.courses=course;
            });*/
    }
    /*getHeroes(): void {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes);
    }*/

    ngOnInit() : void {
        /*this.route.params.forEach((params: Params) => {
         let id = +params['id'];
         this.productService.getProduct(id).then(product => this.product = product);
         });*/

    }

}