import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoEditService {

  constructor(private http : HttpClient) { }

  getTask(taskId: number) : Observable<Task>{
    let params = new HttpParams().set('taskId', taskId.toString());
    return this.http.get<Task>('http://localhost:8080/api/todo/detail', {params: params});
  }

  updateTask(taskModel: Task) {
    taskModel.dueDate = new Date(taskModel.dueDate).toISOString();
    return this.http.post('http://localhost:8080/api/todo/update', taskModel).subscribe({
      error: (err) => console.error(err),
    });
  }
}
