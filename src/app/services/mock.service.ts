import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS, TASKS } from '../mock-data';  

@Injectable({
  providedIn: 'root',
})
export class MockService {
  
  getUsers(): Observable<any> {
    return of(USERS); 
  }

  createUser(user: any): Observable<any> {
    const newUser = { ...user, id: USERS.length + 1 };
    USERS.push(newUser);
    return of(newUser);
  }

  getTasks(): Observable<any> {
    return of(TASKS);
  }

  addTask(task: any): Observable<any> {
    const newTask = { ...task, id: TASKS.length + 1, completed: false, inProgress: false };
    TASKS.push(newTask);
    return of(newTask);
  }

  updateTaskStatus(taskId: number, status: string): Observable<any> {
    const task = TASKS.find(t => t.id === taskId);
    if (task) {
      task.status = status;
      task.completed = status === 'COMPLETED';
      task.inProgress = status === 'IN_PROGRESS';
      return of(task);
    } else {
      return of(null);
    }
  }
}
