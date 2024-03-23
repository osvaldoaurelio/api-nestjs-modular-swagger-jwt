import { ApiProperty } from '@nestjs/swagger';
import { Doctor, Role, User } from '@prisma/client';
import { Exclude, Expose, Transform, plainToInstance } from 'class-transformer';
import { IsArray, IsEnum, IsString, IsUUID } from 'class-validator';
import { UserProperty } from '../docs/properties';

@Exclude()
class InnerDoctorDto implements Doctor {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  crm: string;

  @Expose()
  @IsString()
  fullName: string;

  @Expose()
  @IsArray()
  specialities: string[];

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
export class UserDoctorDto implements User {
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
  @ApiProperty(UserProperty.role.DOCTOR)
  role: Role;

  @Expose()
  @Transform(({ value }) => plainToInstance(InnerDoctorDto, value))
  @ApiProperty(UserProperty.doctor)
  doctor: InnerDoctorDto;

  @Expose()
  @IsString()
  @ApiProperty(UserProperty.createdAt)
  createdAt: Date;

  @Expose()
  @IsString()
  @ApiProperty(UserProperty.updatedAt)
  updatedAt: Date;
}
