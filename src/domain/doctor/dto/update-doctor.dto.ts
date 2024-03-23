import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { DoctorProperty } from '../docs';

export class UpdateDoctorDto {
  @IsOptional()
  @IsString()
  @ApiProperty(DoctorProperty.crm)
  crm?: string;

  @IsOptional()
  @IsString()
  @ApiProperty(DoctorProperty.fullName)
  fullName?: string;

  @IsOptional()
  @IsArray()
  @ApiProperty(DoctorProperty.specialities)
  specialities?: string[];
}
