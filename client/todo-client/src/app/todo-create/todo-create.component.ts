import { TodoCreateService } from './../todo-create.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.css'
})
export class TodoCreateComponent {

  constructor(private todoCreateService: TodoCreateService){}

  createTask: Task =  {
    id: 0,
    userId: 1,
    title: 'test title',
    description: 'test description',
    statusId: 1,
    dueDate: '2023-12-06T13:06:59.000Z'
  };

  addTask() : void{
    console.log(this.createTask.dueDate)
    this.todoCreateService.createTask(this.createTask);
  }
}
