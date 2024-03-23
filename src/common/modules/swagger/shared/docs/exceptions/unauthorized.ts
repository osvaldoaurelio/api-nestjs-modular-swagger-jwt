import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class Unauthorized {
  @ApiProperty({ example: HttpStatus.UNAUTHORIZED })
  statusCode: number;

  @ApiProperty({ example: 'Unauthorized resource' })
  message: string;

  @ApiProperty({ example: 'Unauthorized' })
  error: string;
}
