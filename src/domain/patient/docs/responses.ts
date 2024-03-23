import { ApiResponseOptions } from '@nestjs/swagger';
import { PatientDto } from '../dto';

export class PatientResponse {
  static create: ApiResponseOptions = {
    description: 'Patient created successfully',
    type: PatientDto,
  };

  static findAll: ApiResponseOptions = {
    description: 'Patients retrieved successfully',
    type: [PatientDto],
  };

  static findOne: ApiResponseOptions = {
    description: 'Patient retrieved successfully',
    type: PatientDto,
  };

  static update: ApiResponseOptions = {
    description: 'Patient updated successfully',
    type: PatientDto,
  };

  static remove: ApiResponseOptions = {
    description: 'Patient deleted successfully',
  };
}
