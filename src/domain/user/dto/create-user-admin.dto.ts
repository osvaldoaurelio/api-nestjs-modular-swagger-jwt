import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { UserProperty } from '../docs/properties';
import { CreateUserDto } from './create-user.dto';

class InnerCreateAdminDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  registrationNumber: string;
}

export class CreateUserAdminDto extends CreateUserDto {
  @ValidateNested()
  @Type(() => InnerCreateAdminDto)
  @IsNotEmpty()
  @ApiProperty(UserProperty.createAdmin)
  admin: InnerCreateAdminDto;
}
