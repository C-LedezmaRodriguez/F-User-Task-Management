import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],  
})
export class TasksListComponent implements OnInit {
  tasks: any[] = [];
  users: any[] = [];
  newTask = { name: '', description: '', status: 'PENDING', assignedUser: 1, completed: false, inProgress: false };

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.mockService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
    this.mockService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addTask(): void {
    this.mockService.addTask(this.newTask).subscribe(() => {
      this.ngOnInit(); 
      this.newTask = { name: '', description: '', status: 'PENDING', assignedUser: 1, completed: false, inProgress: false };  // Clear the form
    });
  }

  getUserName(userId: number): string {
    const user = this.users.find(u => u.id === userId);
    return user ? user.name : 'Unknown';
  }
  updateTaskStatus(taskId: number, status: string): void {
    this.mockService.updateTaskStatus(taskId, status).subscribe(() => {
      this.ngOnInit();
    });
  }
}
