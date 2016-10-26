import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params }  from '@angular/router'
import { Location }   from '@angular/common'
import {Course} from './model/Course'
import {CourseService} from './course.service'

@Component({
    moduleId: module.id,
    selector: 'add-course',
    templateUrl: './views/addCourse.component.html',
    styleUrls: ['./css/forms.css']
})

export class CourseAddComponent implements OnInit{
    @Input()
    courses:Course[];
    department: string;
    code: string;
    title: string;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private courseService : CourseService
    ) {}

    addCourse(course) {
        var newCourse={
            department : this.department,
            code : this.code,
            title : this.title
        }
        this.courseService.addCourses(newCourse)
            .subscribe(course=>{
                this.courses=course;
                this.department='',
                this.code='',
                this.title=''
            });
    }

    ngOnInit() : void {
        /*this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.productService.getProduct(id).then(product => this.product = product);
        });*/

    }

    /*goBack() : void {
        this.location.back();
    }

    save() : void {
        this.productService.update(this.product).then(() => this.goBack());
    }*/

}