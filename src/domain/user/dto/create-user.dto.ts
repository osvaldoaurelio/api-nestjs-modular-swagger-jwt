import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserProperty } from '../docs/properties';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty(UserProperty.email)
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty(UserProperty.password)
  password: string;
}
