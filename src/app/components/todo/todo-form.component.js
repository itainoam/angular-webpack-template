export const TodoForm = {
  bindings: {
    todo: '<',
    onAddTodo: '&'
  },
  template: `
  <form name="todoForm" ng-submit="$ctrl.onSubmit();">
    <input type="text" ng-model="$ctrl.todo.title">
    <button type="submit">Submit</button>
  </form>`,
  controller: class TodoFormCtrl {
    constructor() {
        
    }
    $onChanges(changes) {
      if (changes.todo) {
        this.todo = Object.assign({}, this.todo);
      }
    }
    onSubmit() {
      this.onAddTodo({
        $event: {
          todo: this.todo
        }
      });
    }
  }
};

 