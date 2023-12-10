import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:8080/api/todo');
  }

  deleteTask(taskId: number) {
    console.log('delete task')
    return this.http.post('http://localhost:8080/api/todo/delete', taskId).subscribe({
      error: (err) => console.error(err),
    });
  }
}
