import { ApiProperty } from '@nestjs/swagger';
import { Patient, Role, User } from '@prisma/client';
import { Exclude, Expose, Transform, plainToInstance } from 'class-transformer';
import { IsEnum, IsString, IsUUID } from 'class-validator';
import { UserProperty } from '../docs/properties';

@Exclude()
class InnerPatientDto implements Patient {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  cpf: string;

  @Expose()
  @IsString()
  fullName: string;

  @Expose()
  @IsString()
  phone: string;

  @Expose()
  @IsString()
  birthDate: Date;

  @Exclude()
  userId: string;

  @Expose()
  @IsString()
  createdAt: Date;

  @Expose()
  @IsString()
  updatedAt: Date;
}

@Exclude()
export class UserPatientDto implements User {
  @Expose()
  @IsUUID()
  @ApiProperty(UserProperty.id)
  id: string;

  @Exclude()
  hash: string;

  @Expose()
  @IsString()
  @ApiProperty(UserProperty.email)
  email: string;

  @Expose()
  @IsEnum(Role)
  @ApiProperty(UserProperty.role.PATIENT)
  role: Role;

  @Expose()
  @Transform(({ value }) => plainToInstance(InnerPatientDto, value))
  @ApiProperty(UserProperty.patient)
  patient: InnerPatientDto;

  @Expose()
  @IsString()
  @ApiProperty(UserProperty.createdAt)
  createdAt: Date;

  @Expose()
  @IsString()
  @ApiProperty(UserProperty.updatedAt)
  updatedAt: Date;
}
