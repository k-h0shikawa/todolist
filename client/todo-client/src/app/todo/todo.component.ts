import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from './../task';
import { TodoService } from '../todo.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  constructor(
    private todoService: TodoService,
    private router : Router
    ){}

  tasks : Task[] = [];
  ngOnInit(){
    this.todoService.getTasks().subscribe(tasks => this.tasks = tasks);
   }

  navigateToEdit(taskId: number) {
    // 編集画面へのAjax通信
    this.router.navigate(['/todo/edit', taskId]);
    }

  deleteTask(taskId: number) {
    this.todoService.deleteTask(taskId);
  }

}
