import { Injectable } from '@angular/core';
import { Init } from './init-todo';
@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log("TodoService initialized");
    this.load();
  }

  getTodos() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));

  }

  deleteTodo(todoText) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text == todoText) {
        todos.splice(i, 1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  udpateTodo(oldText, newText) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text == oldText) {
        todos[i].text = newText;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
