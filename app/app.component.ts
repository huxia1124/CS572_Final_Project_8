import { StudentsComponent } from './students.component'
import { Component } from '@angular/core';
@Component({
  //imports: [StudentsComponent],
  selector: 'app',
  template: `    
  <div class="module">Student Management System</div>
  <nav>
    <a routerLink="/student" routerLinkActive="active">Students</a>
    <a routerLink="/course" routerLinkActive="active">Courses</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app/css/app.component.css']
})
export class AppComponent {
}