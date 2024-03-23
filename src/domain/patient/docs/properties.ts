import { ApiPropertyOptions } from '@nestjs/swagger';

export class PatientProperty {
  static id: ApiPropertyOptions = {
    example: '6289f3ac-56db-4752-9e26-9511bc12996f',
    description: 'A UUID value',
  };

  static cpf: ApiPropertyOptions = {
    example: '000.000.001-91',
    description: 'A person cpf number',
  };

  static fullName: ApiPropertyOptions = {
    example: 'John Doe',
    description: 'A person full name',
  };

  static phone: ApiPropertyOptions = {
    example: '(99) 99999-9999',
    description: 'A phone number with DDD code',
  };

  static birthDate: ApiPropertyOptions = {
    example: '2023-04-11T17:43:29.712Z',
    description: 'A person birth date',
  };

  static createdAt: ApiPropertyOptions = {
    example: '2023-04-11T17:43:29.712Z',
    description: 'A create date',
  };

  static updatedAt: ApiPropertyOptions = {
    example: '2023-04-11T17:43:29.712Z',
    description: 'A update date',
  };
}
