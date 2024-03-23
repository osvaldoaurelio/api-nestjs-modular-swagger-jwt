import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateDoctorDto } from 'src/domain/doctor/dto';
import { UserProperty } from '../docs/properties';
import { CreateUserDto } from './create-user.dto';

export class CreateUserDoctorDto extends CreateUserDto {
  @ValidateNested()
  @Type(() => CreateDoctorDto)
  @IsNotEmpty()
  @ApiProperty(UserProperty.createDoctor)
  doctor: CreateDoctorDto;
}
