import { ApiResponseOptions } from '@nestjs/swagger';
import { AdminDto } from '../dto';

export class AdminResponse {
  static create: ApiResponseOptions = {
    description: 'Admin created successfully',
    type: AdminDto,
  };

  static findAll: ApiResponseOptions = {
    description: 'Admins retrieved successfully',
    type: [AdminDto],
  };

  static findOne: ApiResponseOptions = {
    description: 'Admin retrieved successfully',
    type: AdminDto,
  };

  static update: ApiResponseOptions = {
    description: 'Admin updated successfully',
    type: AdminDto,
  };

  static remove: ApiResponseOptions = {
    description: 'Admin deleted successfully',
  };
}
