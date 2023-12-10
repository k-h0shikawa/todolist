import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDetailService {

  constructor(private http: HttpClient) { }

  getTask(taskId: number) : Observable<Task>{
    let params = new HttpParams().set('taskId', taskId.toString());
    return this.http.get<Task>('http://localhost:8080/api/todo/detail', {params: params});
  }
}

