export class TodoService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.todos = [
      {
        title: 'task1',
        select: false
      }
    ];
  }
  getTodos() {
    return new Promise((resolve, reject) => {
      resolve(this.todos);
    });
    //   return this.$http.get('/api/todos').then(response => response.data);
  }
}
