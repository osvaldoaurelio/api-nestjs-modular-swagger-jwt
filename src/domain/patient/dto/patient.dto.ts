import { ApiProperty } from '@nestjs/swagger';
import { Patient } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';
import { IsString, IsUUID } from 'class-validator';
import { PatientProperty } from '../docs';

@Exclude()
export class PatientDto implements Patient {
  @Expose()
  @IsUUID()
  @ApiProperty(PatientProperty.id)
  id: string;

  @Expose()
  @IsString()
  @ApiProperty(PatientProperty.cpf)
  cpf: string;

  @Expose()
  @IsString()
  @ApiProperty(PatientProperty.fullName)
  fullName: string;

  @Expose()
  @IsString()
  @ApiProperty(PatientProperty.phone)
  phone: string;

  @Expose()
  @IsString()
  @ApiProperty(PatientProperty.birthDate)
  birthDate: Date;

  @Exclude()
  userId: string;

  @Expose()
  @IsString()
  @ApiProperty(PatientProperty.createdAt)
  createdAt: Date;

  @Expose()
  @IsString()
  @ApiProperty(PatientProperty.updatedAt)
  updatedAt: Date;
}
