import { Todo } from '../todo/type';

export interface User {
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  todo: Todo[];
}
