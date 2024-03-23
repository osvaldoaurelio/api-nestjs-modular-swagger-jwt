import { ApiOperationOptions } from '@nestjs/swagger';

export class UserOperation {
  static getMe: ApiOperationOptions = {
    summary: 'Retrieves logged-in user info',
  };

  static createUserAdmin: ApiOperationOptions = {
    summary: 'Creates a user admin',
  };

  static createUserDoctor: ApiOperationOptions = {
    summary: 'Creates a user doctor',
  };

  static createUserPatient: ApiOperationOptions = {
    summary: 'Creates a user patient',
  };
}
