import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';
import { TodoEditService } from '../todo-edit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css'
})
export class TodoEditComponent {

  constructor(
    private route: ActivatedRoute,
    private todoEditService : TodoEditService
    ){}

  editTask: Task = {
    id: 0,
    userId: 1,
    title: 'test edit title',
    description: 'test edit description',
    statusId: 1,
    dueDate: '2023-12-06T13:06:59.000Z'
  };

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.todoEditService.getTask(+id).subscribe(task => this.editTask = task);
    }
  }

  updateTask() {
    this.todoEditService.updateTask(this.editTask)
    }
}
