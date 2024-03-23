import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class NotFound {
  @ApiProperty({ example: HttpStatus.NOT_FOUND })
  statusCode: number;

  @ApiProperty({ example: 'Resource not found' })
  message: string;

  @ApiProperty({ example: 'Not Found' })
  error: string;
}
