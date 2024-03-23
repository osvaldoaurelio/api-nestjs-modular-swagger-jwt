import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PatientProperty } from '../docs';

export class UpdatePatientDto {
  @IsOptional()
  @IsString()
  @ApiProperty(PatientProperty.cpf)
  cpf?: string;

  @IsOptional()
  @IsString()
  @ApiProperty(PatientProperty.fullName)
  fullName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty(PatientProperty.phone)
  phone?: string;

  @IsOptional()
  @IsString()
  @ApiProperty(PatientProperty.birthDate)
  birthDate?: Date;
}
