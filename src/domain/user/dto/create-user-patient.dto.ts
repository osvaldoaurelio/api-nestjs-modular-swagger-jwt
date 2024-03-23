import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreatePatientDto } from 'src/domain/patient/dto';
import { UserProperty } from '../docs/properties';
import { CreateUserDto } from './create-user.dto';

export class CreateUserPatientDto extends CreateUserDto {
  @ValidateNested()
  @Type(() => CreatePatientDto)
  @IsNotEmpty()
  @ApiProperty(UserProperty.createPatient)
  patient: CreatePatientDto;
}
