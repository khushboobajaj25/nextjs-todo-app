
import { users } from '../mock/userData';
import { Todo, TodoStatus } from '../todo/type';
import { User } from '../user/type';

export const getUser = (): User[] => {
  return users;
};
