import { Tasks } from './../mock-tasks';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from './../task';
import { TodoService } from '../todo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  selectedTask: Task | null = null;

  constructor(
    private todoService: TodoService
    // , private http: HttpClient
    ){}

  tasks : Task[] = [];
  ngOnInit(){
    this.todoService.getTasks().subscribe(tasks => this.tasks = tasks);
    // this.http.get('http://localhost:8080/api/todo').subscribe(data => {
    //   console.log(JSON.stringify(data, null, 2));
    // });

  }

  onSelect(task:Task) : void{
    this.selectedTask = task;
  }
}
