import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

export const routes: Routes = [

  {
    path: 'todo',
    component:TodoComponent,
    data: {title: 'TODO LIST'}
  }
  ,
  {
    path: 'todo/create', // 追加
    component: TodoCreateComponent, // 追加
    data: {title: 'Create TODO'} // 追加
  }
  ,
  {
    path: 'todo/edit/:id',
    component: TodoEditComponent,
    data: {title: 'Edit TODO'}
  }
  ,
  {
    path: 'todo/detail/:id',
    component: TodoDetailComponent,
    data: {title: 'Detail TODO'}
  }
]
