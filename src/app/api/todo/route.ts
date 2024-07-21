import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { StatusCodes } from 'http-status-codes';
import { todos } from '../mock/todoData';
import { createTodo, getTodo } from '../db/mongodb';
import { TodoStatus } from './type';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = (searchParams.get('q') || '').toLowerCase();
  const status = (searchParams.get('s') || '').toUpperCase();
  const todo = getTodo();

  const response = todo.filter((item) => {
    return (item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)) && item.status.includes(status);
  });

  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  const newTodo = await request.json();
  let res;
  if (!newTodo.title || !newTodo.description) {
    NextResponse.json({
      status: StatusCodes.BAD_REQUEST,
      message: 'title and description are required fields',
    });
  } else {
    if (newTodo.dueDate) {
      newTodo.dueDate = new Date(newTodo.dueDate);
    }
    newTodo.status = newTodo.status || TodoStatus.PENDING;
    newTodo.isFavorite = newTodo.isFavorite || false;
  }
  return NextResponse.json(createTodo(newTodo), { status: StatusCodes.CREATED });
}
