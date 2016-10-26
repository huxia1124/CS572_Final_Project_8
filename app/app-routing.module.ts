import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent }   from './students.component';
import { CoursesComponent }      from './courses.component';
import { CourseAddComponent }      from './course-add.component';
import {CourseViewComponent} from './course-view.component'

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student',  component: StudentsComponent },
  { path: 'course',     component: CoursesComponent },
  { path: 'addCourse',     component: CourseAddComponent },
    { path: 'viewCourses',     component: CourseViewComponent },
    { path: 'addStudent',     component: StudentsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}