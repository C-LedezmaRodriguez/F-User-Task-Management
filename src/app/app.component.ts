import { Component } from '@angular/core';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MockService } from './services/mock.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [TasksListComponent, UserListComponent, HttpClientModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private mockService: MockService) {}
}
