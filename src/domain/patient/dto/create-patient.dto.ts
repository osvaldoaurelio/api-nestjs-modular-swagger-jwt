import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PatientProperty } from '../docs';

export class CreatePatientDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty(PatientProperty.cpf)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty(PatientProperty.fullName)
  fullName: string;

  @IsOptional()
  @IsString()
  @ApiProperty(PatientProperty.phone)
  phone?: string;

  @IsOptional()
  @IsString()
  @ApiProperty(PatientProperty.birthDate)
  birthDate?: Date;
}
