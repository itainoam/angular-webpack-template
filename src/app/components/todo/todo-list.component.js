export const TodoList = {
  bindings: {
    todos: '<'
  },
  template: `
  <div>
    <ul>
        <li ng-repeat="todo in $ctrl.todos">{{todo.title}}</li>
    </ul>
  </div>`
};
