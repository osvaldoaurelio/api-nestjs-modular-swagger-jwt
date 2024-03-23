import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRequest } from 'src/common/interfaces';

export const GetUser = createParamDecorator(
  (data: keyof User | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<UserRequest>();

    if (data) return request.user[data];

    return request.user;
  },
);
