import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class Forbidden {
  @ApiProperty({ example: HttpStatus.FORBIDDEN })
  statusCode: number;

  @ApiProperty({ example: 'Forbidden resource' })
  message: string;

  @ApiProperty({ example: 'Forbidden' })
  error: string;
}
