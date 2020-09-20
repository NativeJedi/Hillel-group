import './assets/styles/main.scss';
import TodoList from './todo';

class TodoApp extends TodoList {
  #list = {};

  constructor(form, list, todoInput) {
    super([]);

    this.#list = list;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      this.addTodo(todoInput.value);

      todoInput.value = '';
    });
  }

  renderTodos() {
    this.#list.innerHTML = '';

    this.todos.forEach((todo) => {
      const todoLi = TodoApp.createTodo(todo);

      this.#list.appendChild(todoLi);
    });
  }

  addTodo(text) {
    super.addTodo(text);
    this.renderTodos();
  }

  static createTodo(todo) {
    const liElement = document.createElement('li');
    liElement.classList.add('todo-list__item', 'input-group', 'mb-3');
    liElement.id = todo.id;

    if (todo.isDone) {
      liElement.classList.add('active');
    }

    const todoItemInput = TodoApp.createTodoItemInput(todo.text);
    liElement.insertAdjacentElement('afterbegin', todoItemInput);

    const checkbox = TodoApp.createCheckbox(liElement);
    liElement.insertAdjacentElement('afterbegin', checkbox);

    return liElement;
  }

  static createTodoItemInput(todoText) {
    const input = document.createElement('input');
    input.value = todoText;
    input.classList.add('todo-list__input-text', 'form-control');
    input.readOnly = true;

    return input;
  }

  static createCheckbox() {
    const checkboxWrapper = document.createElement('div');

    checkboxWrapper.classList.add('input-group-prepend');
    checkboxWrapper.innerHTML = `
      <div class="input-group-text">
        <input type="checkbox">
      </div>
    `;

    const checkbox = checkboxWrapper.querySelector('input');

    checkbox.addEventListener('input', () => {});

    return checkboxWrapper;
  }
}

const todoForm = document.querySelector('.todo-app__form');
const todoFormInput = document.querySelector('.todo-app__input');
const todoList = document.querySelector('.todo-list');

const todoApp = new TodoApp(todoForm, todoList, todoFormInput);
todoApp.addTodo('asdassad');
console.log(todoApp);

/*

const todoForm = document.querySelector('.todo-app__form');
const todoFormInput = document.querySelector('.todo-app__input');
const todoList = document.querySelector('.todo-list');

function createDeleteButton(liElement) {
  const button = document.createElement('button');

  button.classList.add('btn', 'btn-danger', 'btn-sm');
  button.innerHTML = '<span class="material-icons">delete_outline</span>';

  button.addEventListener('click', () => {
    liElement.remove();
  });

  return button;
}

function createCheckbox(liElement) {
  const checkboxWrapper = document.createElement('div');

  checkboxWrapper.classList.add('input-group-prepend');
  checkboxWrapper.innerHTML = `
    <div class="input-group-text">
      <input type="checkbox">
    </div>
  `;

  const checkbox = checkboxWrapper.querySelector('input');

  checkbox.addEventListener('input', () => {
    const { checked } = checkbox;

    if (checked) {
      liElement.classList.add('active');
    } else {
      liElement.classList.remove('active');
    }
  });

  return checkboxWrapper;
}

function createTodoItemInput(todoText) {
  const input = document.createElement('input');
  input.value = todoText;
  input.classList.add('todo-list__input-text', 'form-control');
  input.readOnly = true;

  return input;
}

function createTodoItem(todoText) {
  const liElement = document.createElement('li');
  liElement.classList.add('todo-list__item', 'input-group', 'mb-3');

  const todoItemInput = createTodoItemInput(todoText);
  liElement.insertAdjacentElement('afterbegin', todoItemInput);

  const checkbox = createCheckbox(liElement);
  liElement.insertAdjacentElement('afterbegin', checkbox);

  const deleteButton = createDeleteButton(liElement);
  liElement.insertAdjacentElement('beforeend', deleteButton);

  return liElement;
}

function addTodo(value) {
  const todoItem = createTodoItem(value);
  todoList.appendChild(todoItem);
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo(todoFormInput.value);

  todoFormInput.value = '';
});
*/
