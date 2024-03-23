import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { UpperCasePipe } from 'src/common/pipes';
import { Tags } from 'src/common/modules/swagger/shared/docs';
import { AuthService } from './auth.service';
import { AuthDto, CreateAuthDto } from './dto';

@ApiTags(Tags.auth.name)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup/:type')
  signup(
    @Param('type', UpperCasePipe, ValidationPipe) role: Role,
    @Param('type', ValidationPipe) type: 'admin' | 'doctor' | 'patient',
    @Body() createAuthDto: CreateAuthDto,
  ) {
    console.log({
      role,
      type,
    });

    return this.authService.signupUser(createAuthDto, role, type);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
