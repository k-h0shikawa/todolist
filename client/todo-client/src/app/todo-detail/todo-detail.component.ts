import { TodoDetailService } from './../todo-detail.service';
import { Component } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';



@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent {

    constructor(
      private route: ActivatedRoute,
      private TodoDetailService: TodoDetailService,
      private location: Location // 戻る進むを使用できるようにする
    ){}

    // TODO : APIから取得するように変更
    detailTask: Task = {
      id: 0,
      userId: 1,
      title: 'test edit title',
      description: 'test edit description',
      statusId: 1,
      dueDate: '2023-12-06T13:06:59.000Z'
    }

    ngOnInit(){
      const id = this.route.snapshot.paramMap.get("id");
      if (id !== null) {
        this.TodoDetailService.getTask(+id).subscribe(task => this.detailTask = task);
      }
    }

}
