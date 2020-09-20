import uniqid from 'uniqid';

export default class TodoList {
  todos = [];

  constructor(todos) {
    this.todos = todos;
  }

  addTodo(text) {
    const todo = {
      id: uniqid(),
      text,
      isDone: false,
    };

    this.todos.push(todo);

    return todo;
  }
}
