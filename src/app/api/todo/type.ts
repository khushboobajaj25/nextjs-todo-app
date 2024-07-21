export enum TodoStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}
export interface Todo {
  id:string,
  title: string;
  description: string;
  dueDate?: Date;
  status: TodoStatus;
  isFavorite?: boolean;
}
