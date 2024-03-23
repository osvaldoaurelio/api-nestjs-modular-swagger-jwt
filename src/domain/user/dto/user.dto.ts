import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';
import { Exclude, Expose, Transform, plainToInstance } from 'class-transformer';
import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { AdminDto } from 'src/domain/admin/dto';
import { DoctorDto } from 'src/domain/doctor/dto';
import { PatientDto } from 'src/domain/patient/dto';
import { UserProperty } from '../docs/properties';

@Exclude()
export class UserDto implements User {
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
  @ApiProperty(UserProperty.role.ADMIN)
  role: Role;

  @Expose()
  @IsOptional()
  @Transform(({ value }) =>
    value ? plainToInstance(AdminDto, value) : undefined,
  )
  admin?: AdminDto;

  @Expose()
  @IsOptional()
  @Transform(({ value }) =>
    value ? plainToInstance(DoctorDto, value) : undefined,
  )
  doctor?: DoctorDto;

  @Expose()
  @IsOptional()
  @Transform(({ value }) =>
    value ? plainToInstance(PatientDto, value) : undefined,
  )
  patient?: PatientDto;

  @Expose()
  @IsString()
  @ApiProperty(UserProperty.createdAt)
  createdAt: Date;

  @Expose()
  @IsString()
  @ApiProperty(UserProperty.updatedAt)
  updatedAt: Date;
}
