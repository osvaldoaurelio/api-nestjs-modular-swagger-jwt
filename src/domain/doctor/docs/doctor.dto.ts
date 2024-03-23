import { ApiProperty } from '@nestjs/swagger';
import { Doctor } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';
import { IsArray, IsString, IsUUID } from 'class-validator';
import { DoctorProperty } from '../docs';

/**
 * Este arquivo existe em 2 lugares: src/doctor/docs/ e tambem em src/doctor/dto/,
 * Motivo: não foi possível fazer o import no arquivo src/doctor/docs/responses.ts
 */
@Exclude()
export class DoctorDto implements Doctor {
  @Expose()
  @IsUUID()
  @ApiProperty(DoctorProperty.id)
  id: string;

  @Expose()
  @IsString()
  @ApiProperty(DoctorProperty.crm)
  crm: string;

  @Expose()
  @IsString()
  @ApiProperty(DoctorProperty.fullName)
  fullName: string;

  @Expose()
  @IsArray()
  @ApiProperty(DoctorProperty.specialities)
  specialities: string[];

  @Exclude()
  userId: string;

  @Expose()
  @IsString()
  @ApiProperty(DoctorProperty.createdAt)
  createdAt: Date;

  @Expose()
  @IsString()
  @ApiProperty(DoctorProperty.updatedAt)
  updatedAt: Date;
}
