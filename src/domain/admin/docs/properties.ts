import { ApiPropertyOptions } from '@nestjs/swagger';

export class AdminProperty {
  static id: ApiPropertyOptions = {
    example: '6289f3ac-56db-4752-9e26-9511bc12996f',
    description: 'A UUID value',
  };

  static fullName: ApiPropertyOptions = {
    example: 'John Doe',
    description: 'A person full name',
  };

  static registrationNumber: ApiPropertyOptions = {
    example: '123456-XX',
    description: 'A admin registration number',
  };

  static user: ApiPropertyOptions = {
    example: {
      email: 'user@example.com',
      password: 'password',
    },
    description: 'The admin user information',
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
