import { ApiResponseOptions } from '@nestjs/swagger';
import { UserAdminDto, UserDoctorDto, UserDto, UserPatientDto } from '../dto';

export class UserResponse {
  static getMe: ApiResponseOptions = {
    description: 'User info retrieved successfully',
    type: UserDto,
  };

  static createUserAdmin: ApiResponseOptions = {
    description: 'User admin created successfully',
    type: UserAdminDto,
  };

  static createUserDoctor: ApiResponseOptions = {
    description: 'User doctor created successfully',
    type: UserDoctorDto,
  };

  static createUserPatient: ApiResponseOptions = {
    description: 'User patient created successfully',
    type: UserPatientDto,
  };
}
