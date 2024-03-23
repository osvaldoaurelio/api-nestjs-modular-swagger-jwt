import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { AdminProperty } from '../docs';

export class UpdateAdminDto {
  @IsOptional()
  @IsString()
  @ApiProperty(AdminProperty.fullName)
  fullName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty(AdminProperty.registrationNumber)
  registrationNumber?: string;
}
