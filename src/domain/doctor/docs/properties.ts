import { ApiPropertyOptions } from '@nestjs/swagger';

export class DoctorProperty {
  static id: ApiPropertyOptions = {
    example: '6289f3ac-56db-4752-9e26-9511bc12996f',
    description: 'A UUID value',
  };

  static crm: ApiPropertyOptions = {
    example: '123456-GO',
    description: 'A doctor crm number',
  };

  static fullName: ApiPropertyOptions = {
    example: 'John Doe',
    description: 'A person full name',
  };

  static specialities: ApiPropertyOptions = {
    example: ['cardiologista', 'clínico geral'],
    description: 'The doctor specialities',
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
