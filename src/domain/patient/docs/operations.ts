import { ApiOperationOptions } from '@nestjs/swagger';

export class PatientOperation {
  static create: ApiOperationOptions = {
    summary: 'Creates a patient',
  };

  static findAll: ApiOperationOptions = {
    summary: 'Retrieves many patients',
  };

  static findOne: ApiOperationOptions = {
    summary: 'Retrieves a patient',
  };

  static update: ApiOperationOptions = {
    summary: 'Updates a patient',
  };

  static remove: ApiOperationOptions = {
    summary: 'Deletes a patient',
  };
}
