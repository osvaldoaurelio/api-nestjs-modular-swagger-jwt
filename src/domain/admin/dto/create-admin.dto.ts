import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { AdminProperty } from '../docs';

export class CreateAdminDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty(AdminProperty.fullName)
  fullName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty(AdminProperty.registrationNumber)
  registrationNumber: string;
}
