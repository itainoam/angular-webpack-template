import angular from 'angular';
import { TodoComponent } from './todo.component';
import { TodoForm } from './todo-form.component';
import { TodoList } from './todo-list.component'
import { TodoService } from './todo.service';

export const TodoModule = angular
  .module('todo', [])
  .service('TodoService',TodoService)
  .component('todo', TodoComponent)
  .component('todoForm', TodoForm)
  .component('todoList', TodoList)
  .name;