import { NextRequest, NextResponse } from 'next/server';
import { deleteTodoById, getTodoById } from '../../db/mongodb';
import { StatusCodes } from 'http-status-codes';

interface IParams {
  params: { id: string };
}
export function GET(request: NextRequest, { params }: IParams) {
  const todo = getTodoById(params.id);
  if (todo) return NextResponse.json(todo);

  return NextResponse.json(
    {
      message: 'Todo Not Found with Id ' + params.id,
    },
    { status: StatusCodes.BAD_REQUEST }
  );
}
export function DELETE(request: NextRequest, { params }: IParams) {
  const isTodoDeleted = deleteTodoById(params.id);
  if (isTodoDeleted) {
    return NextResponse.json({ message: 'Todo Deleted successfully' }, { status: StatusCodes.OK });
  }
  return NextResponse.json(
    {
      message: 'Todo Not Found with Id ' + params.id,
    },
    { status: StatusCodes.BAD_REQUEST }
  );
}
