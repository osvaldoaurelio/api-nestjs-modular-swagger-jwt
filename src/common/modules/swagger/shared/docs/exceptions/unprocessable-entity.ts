import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class UnprocessableEntity {
  @ApiProperty({ example: HttpStatus.UNPROCESSABLE_ENTITY })
  statusCode: number;

  @ApiProperty({ example: 'unique property already taken' })
  message: string;

  @ApiProperty({ example: 'Unprocessable Entity' })
  error: string;
}
