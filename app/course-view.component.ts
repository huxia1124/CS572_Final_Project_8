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
    )
    {

        this.courseService.getCourses()
            .then(
                response => {
                    let body = response.json();

                    this.courses = response.json() as Course[];
                    console.log(JSON.stringify(this.courses));
                })

    }
    deleteCource(id){
        var course = this.courses;
        this.courseService.daleteCourse(id).subscribe(data=>{
            if(data.n == 1){
                for(var i=0; i<course.length;i++){
                    if(course[i]._id == id){
                        course.splice(i,1);
                    }
                }
            }
        })
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