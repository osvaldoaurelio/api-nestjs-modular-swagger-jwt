import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAdminDto } from 'src/domain/admin/dto';
import { CreateDoctorDto } from 'src/domain/doctor/dto';
import { CreatePatientDto } from 'src/domain/patient/dto';

export class CreateAuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
    format: 'email',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'password',
    description: 'The password of the user',
    minLength: 8,
  })
  password: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAdminDto)
  @ApiProperty({
    example: {
      fullName: 'John Doe',
      registrationNumber: '123456',
    },
    description: '',
  })
  admin?: CreateAdminDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateDoctorDto)
  @ApiProperty({
    example: {
      crm: '123456-GO',
      fullName: 'John Doe',
      specialities: ['cardiologista', 'clínico geral'],
    },
    description: '',
  })
  doctor?: CreateDoctorDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePatientDto)
  @ApiProperty({
    example: {
      cpf: '000.000.001-91',
      fullName: 'John Doe',
      phone: '99 99999-9999',
      birthDate: '2023-04-11T17:43:29.712Z',
    },
    description: '',
  })
  patient?: CreatePatientDto;
}
