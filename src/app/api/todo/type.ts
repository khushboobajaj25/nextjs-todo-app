export enum TodoStatus {
  COMPLETED,
  PENDING,
}
export interface Todo {
  title: string;
  description: string;
  dueDate?: Date;
  status: TodoStatus;
  isFavorite?: boolean;
}
