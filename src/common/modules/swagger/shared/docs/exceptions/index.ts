import { ApiResponseOptions } from '@nestjs/swagger';
import { BadRequest } from './bad-request';
import { Forbidden } from './forbidden';
import { InternalServerError } from './internal-server-error';
import { NotFound } from './not-found';
import { Unauthorized } from './unauthorized';
import { UnprocessableEntity } from './unprocessable-entity';

export class Exception {
  static badRequest: ApiResponseOptions = {
    description: 'Error: Bad request',
    type: BadRequest,
  };

  static unauthorized: ApiResponseOptions = {
    description: 'Error: Unauthorized',
    type: Unauthorized,
  };

  static forbidden: ApiResponseOptions = {
    description: 'Error: Forbidden',
    type: Forbidden,
  };

  static notFound: ApiResponseOptions = {
    description: 'Error: Not found',
    type: NotFound,
  };

  static unprocessableEntity: ApiResponseOptions = {
    description: 'Error: Unprocessable Entity',
    type: UnprocessableEntity,
  };

  static internalServerError: ApiResponseOptions = {
    description: 'Error: Internal server error',
    type: InternalServerError,
  };
}
