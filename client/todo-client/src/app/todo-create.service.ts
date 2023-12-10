import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoCreateService {

  constructor(private http: HttpClient) { }

  createTask(taskModel : Task) {
    taskModel.dueDate = new Date(taskModel.dueDate).toISOString();
    return this.http.post('http://localhost:8080/api/todo/insert', taskModel).subscribe({
      error: (err) => console.error(err),
    });
  }
}
