import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios`, user);
  }

  getTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tareas`);
  }

  addTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tareas`, task);
  }

  updateTaskStatus(taskId: number, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/tareas/${taskId}/estado`, { estado: status });
  }
}
