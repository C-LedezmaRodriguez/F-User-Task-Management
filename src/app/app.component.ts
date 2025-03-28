import { Component } from '@angular/core';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MockService } from './services/mock.service';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [TasksListComponent, UserListComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private mockService: MockService) {}
}
