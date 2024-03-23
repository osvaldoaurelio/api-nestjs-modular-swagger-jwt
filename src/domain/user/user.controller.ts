import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { User } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { PrismaClientKnownRequestError } from 'src/common/handlers';
import { GetUser } from 'src/domain/auth/decorator';
import { JwtGuard } from 'src/domain/auth/guard';
import { Exception, Tags } from 'src/common/modules/swagger/shared/docs';
import { UserOperation, UserResponse } from './docs';
import {
  CreateUserAdminDto,
  CreateUserDoctorDto,
  CreateUserPatientDto,
  UserDto,
} from './dto';
import { UserService } from './user.service';

@ApiTags(Tags.user.name)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation(UserOperation.getMe)
  @ApiOkResponse(UserResponse.getMe)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return plainToInstance(UserDto, user);
  }

  @ApiOperation(UserOperation.createUserAdmin)
  @ApiCreatedResponse(UserResponse.createUserAdmin)
  @ApiBadRequestResponse(Exception.badRequest)
  @ApiUnprocessableEntityResponse(Exception.unprocessableEntity)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @UseFilters(PrismaClientKnownRequestError)
  @Post('admin')
  createUserAdmin(@Body() createUserAdminDto: CreateUserAdminDto) {
    return this.userService.createUserAdmin(createUserAdminDto);
  }

  @ApiOperation(UserOperation.createUserDoctor)
  @ApiCreatedResponse(UserResponse.createUserDoctor)
  @ApiBadRequestResponse(Exception.badRequest)
  @ApiUnprocessableEntityResponse(Exception.unprocessableEntity)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @UseFilters(PrismaClientKnownRequestError)
  @Post('doctor')
  createUserDoctor(@Body() createUserDoctorDto: CreateUserDoctorDto) {
    return this.userService.createUserDoctor(createUserDoctorDto);
  }

  @ApiOperation(UserOperation.createUserPatient)
  @ApiCreatedResponse(UserResponse.createUserPatient)
  @ApiBadRequestResponse(Exception.badRequest)
  @ApiUnprocessableEntityResponse(Exception.unprocessableEntity)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @UseFilters(PrismaClientKnownRequestError)
  @Post('patient')
  createUserPatient(@Body() createUserPatientDto: CreateUserPatientDto) {
    return this.userService.createUserPatient(createUserPatientDto);
  }
}
