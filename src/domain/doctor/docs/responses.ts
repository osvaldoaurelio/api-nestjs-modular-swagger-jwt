import { ApiResponseOptions } from '@nestjs/swagger';
import { DoctorDto } from './doctor.dto';

export class DoctorResponse {
  static create: ApiResponseOptions = {
    description: 'Doctor created successfully',
    type: DoctorDto,
  };

  static findAll: ApiResponseOptions = {
    description: 'Doctors retrieved successfully',
    type: [DoctorDto],
  };

  static findOne: ApiResponseOptions = {
    description: 'Doctor retrieved successfully',
    type: DoctorDto,
  };

  static update: ApiResponseOptions = {
    description: 'Doctor updated successfully',
    type: DoctorDto,
  };

  static remove: ApiResponseOptions = {
    description: 'Doctor deleted successfully',
  };
}
