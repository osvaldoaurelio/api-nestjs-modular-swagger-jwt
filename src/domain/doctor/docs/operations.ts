import { ApiOperationOptions } from '@nestjs/swagger';

export class DoctorOperation {
  static create: ApiOperationOptions = {
    summary: 'Creates a doctor',
  };

  static findAll: ApiOperationOptions = {
    summary: 'Retrieves many doctors',
  };

  static findOne: ApiOperationOptions = {
    summary: 'Retrieves a doctor',
  };

  static update: ApiOperationOptions = {
    summary: 'Updates a doctor',
  };

  static remove: ApiOperationOptions = {
    summary: 'Deletes a doctor',
  };
}
