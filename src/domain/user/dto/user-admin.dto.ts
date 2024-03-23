import { ApiProperty } from '@nestjs/swagger';
import { Admin, Role, User } from '@prisma/client';
import { Exclude, Expose, Transform, plainToInstance } from 'class-transformer';
import { IsEnum, IsString, IsUUID } from 'class-validator';
import { UserProperty } from '../docs/properties';

@Exclude()
class InnerAdminDto implements Admin {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  fullName: string;

  @Expose()
  @IsString()
  registrationNumber: string;

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
export class UserAdminDto implements User {
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
  @Transform(({ value }) => plainToInstance(InnerAdminDto, value))
  @ApiProperty(UserProperty.admin)
  admin: InnerAdminDto;

  @Expose()
  @IsString()
  @ApiProperty(UserProperty.createdAt)
  createdAt: Date;

  @Expose()
  @IsString()
  @ApiProperty(UserProperty.updatedAt)
  updatedAt: Date;
}
