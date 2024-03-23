import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayUnique,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { DoctorProperty } from '../docs';

export class CreateDoctorDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty(DoctorProperty.crm)
  crm: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty(DoctorProperty.fullName)
  fullName: string;

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  @ApiProperty(DoctorProperty.specialities)
  specialities?: string[];
}
