import { ApiProperty } from '@nestjs/swagger';
import { Admin } from '@prisma/client';
import { Exclude, Expose, Transform, plainToInstance } from 'class-transformer';
import { IsString, IsUUID } from 'class-validator';
import { UserDto } from 'src/domain/user/dto';
import { AdminProperty } from '../docs';

@Exclude()
export class AdminDto implements Admin {
  @Expose()
  @IsUUID()
  @ApiProperty(AdminProperty.id)
  id: string;

  @Expose()
  @IsString()
  @ApiProperty(AdminProperty.fullName)
  fullName: string;

  @Expose()
  @IsString()
  @ApiProperty(AdminProperty.registrationNumber)
  registrationNumber: string;

  @Exclude()
  userId: string;

  @Expose()
  @Transform(({ value }) => plainToInstance(UserDto, value))
  user: UserDto;

  @Expose()
  @IsString()
  @ApiProperty(AdminProperty.createdAt)
  createdAt: Date;

  @Expose()
  @IsString()
  @ApiProperty(AdminProperty.updatedAt)
  updatedAt: Date;
}
