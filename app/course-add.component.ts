import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params }  from '@angular/router'
import { Location }   from '@angular/common'
import {Course} from './model/Course'

@Component({
    moduleId: module.id,
    selector: 'add-course',
    templateUrl: './views/addCourse.component.html',
    styleUrls: ['./css/forms.css']
})

export class CourseAddComponent implements OnInit{
    @Input()

    quantity = 1;

    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) {}

    registerUser(user) {
        //let data = JSON.stringify(user);
        /*this.http.post(CREATE_USER_ENDPOINT, data)
            .subscribe(
                data => alert('Your account has been created!'),
                error => alert(error.json().message)
            );*/
        console.dir(user);
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