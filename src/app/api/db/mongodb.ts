import { StatusCodes } from 'http-status-codes';
import { todos } from '../mock/todoData';
import { Todo } from '../todo/type';

let todoId = 0;
export function getTodo() {
  return todos;
}

export function createTodo(newTodo: Todo) {
  todoId+=1;
  newTodo.id = todoId.toString();
  todos.push(newTodo);
  return newTodo;
}

export function getTodoById(id: string) {
  return getTodo().find((todo) => todo.id === id);
}

export function deleteTodoById(id: string):boolean {
  const todoIndex = getTodo().findIndex((todo) => todo.id === id);
  if(todoIndex === -1) return false
  todos.splice(todoIndex, 1);
  return true;
}
