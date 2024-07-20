import { NextRequest, NextResponse } from 'next/server';
import { getUser } from '../db/mongodb';
import { User } from '../user/type';

interface UserDbResponse {
  status: number;
  message: string;
  data: User;
}
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams && searchParams.get('id');
  let res;
  if (!userId) {
    res = {
      status: 400,
      message: 'Please enter user id',
    };
  } else {
    const users = getUser();
    const user = users.find((user) => user.id === parseInt(userId));
    if (user) {
      res = {
        status: 200,
        message: 'User Found',
        data: user?.todo,
      };
    } else {
      res = {
        status: 400,
        message: 'User Id not found',
      };
    }
  }
  return NextResponse.json(res, { status: res.status });
}
