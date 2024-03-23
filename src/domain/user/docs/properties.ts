import { ApiPropertyOptions } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class UserProperty {
  static id: ApiPropertyOptions = {
    example: '6289f3ac-56db-4752-9e26-9511bc12996f',
    description: 'A UUID value',
  };

  static email: ApiPropertyOptions = {
    example: 'user@example.com',
    description: 'The email of the user',
    format: 'email',
  };

  static password: ApiPropertyOptions = {
    example: 'password',
    description: 'The password of the user',
    minLength: 8,
  };

  static role: Record<Role, ApiPropertyOptions> = {
    ADMIN: {
      example: Role.ADMIN,
      description: 'The role of the user admin',
    },
    DOCTOR: {
      example: Role.DOCTOR,
      description: 'The role of the user doctor',
    },
    PATIENT: {
      example: Role.PATIENT,
      description: 'The role of the user patient',
    },
  };

  static createAdmin: ApiPropertyOptions = {
    example: {
      fullName: 'John Doe',
      registrationNumber: '123456-GO',
    },
    description: 'The admin information',
  };

  static createDoctor: ApiPropertyOptions = {
    example: {
      crm: '123456-GO',
      fullName: 'John Doe',
      specialities: ['cardiologista', 'clínico geral'],
    },
    description: 'The doctor information',
  };

  static createPatient: ApiPropertyOptions = {
    example: {
      cpf: '000.000.001-91',
      fullName: 'John Doe',
      phone: '(99) 99999-9999',
      birthDate: '2023-04-11T17:43:29.712Z',
    },
    description: 'The patient information',
  };

  static admin: ApiPropertyOptions = {
    example: {
      id: '6289f3ac-56db-4752-9e26-9511bc12996f',
      fullName: 'John Doe',
      registrationNumber: '123456-GO',
      createdAt: '2023-04-11T17:43:29.712Z',
      updatedAt: '2023-04-11T17:43:29.712Z',
    },
    description: 'The admin information',
  };

  static doctor: ApiPropertyOptions = {
    example: {
      id: '6289f3ac-56db-4752-9e26-9511bc12996f',
      crm: '123456-GO',
      fullName: 'John Doe',
      specialities: ['cardiologista', 'clínico geral'],
      createdAt: '2023-04-11T17:43:29.712Z',
      updatedAt: '2023-04-11T17:43:29.712Z',
    },
  };

  static patient: ApiPropertyOptions = {
    example: {
      id: '6289f3ac-56db-4752-9e26-9511bc12996f',
      cpf: '000.000.001-91',
      fullName: 'John Doe',
      phone: '(99) 99999-9999',
      birthDate: '2023-04-11T17:43:29.712Z',
      createdAt: '2023-04-11T17:43:29.712Z',
      updatedAt: '2023-04-11T17:43:29.712Z',
    },
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
