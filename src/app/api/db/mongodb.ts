import { StatusCodes } from 'http-status-codes';
import { todos } from '../mock/todoData';
import { Todo } from '../todo/type';

export function getTodo() {
  return todos;
}

export function createTodo(newTodo: Todo) {
  newTodo.id = (todos.length + 1).toString();
  todos.push(newTodo);
  return newTodo;
}
