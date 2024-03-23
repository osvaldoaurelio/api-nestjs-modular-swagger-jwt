import { ApiOperationOptions } from '@nestjs/swagger';

export class AdminOperation {
  static create: ApiOperationOptions = {
    summary: 'Creates a admin',
  };

  static findAll: ApiOperationOptions = {
    summary: 'Retrieves many admins',
  };

  static findOne: ApiOperationOptions = {
    summary: 'Retrieves a admin',
  };

  static update: ApiOperationOptions = {
    summary: 'Updates a admin',
  };

  static remove: ApiOperationOptions = {
    summary: 'Deletes a admin',
  };
}
