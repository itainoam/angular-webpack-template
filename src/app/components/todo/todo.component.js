class TodoCtrl {
  constructor(TodoService) {
    ('ngInject');
    this.todoService = TodoService;
  }
  $onInit() {
    this.newTodo = {
      title: '',
      selected: false
    };
    this.todos = [];
    this.todoService.getTodos().then(response => {
      this.todos = response;
      console.log(this.todos);
    });
  }
  addTodo({ todo }) {
    if (!todo) return;
    this.todos.unshift(todo);
    this.newTodo = {
      title: '',
      selected: false
    };
  }
}

const template = `
  <div class="todo">
      <todo-form todo="$ctrl.newTodo" on-add-todo="$ctrl.addTodo($event);">
      </todo-form>
      <todo-list todos="$ctrl.todos"></todo-list>
  </div>`;
  
export const TodoComponent = {
  template,
  controller: TodoCtrl
};
