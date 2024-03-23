import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { PrismaClientKnownRequestError } from 'src/common/handlers';
import { Exception, Tags } from 'src/common/modules/swagger/shared/docs';
import { Roles } from '../auth/decorator';
import { JwtGuard, RolesGuard } from '../auth/guard';
import { DoctorOperation, DoctorResponse } from './docs';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto, UpdateDoctorDto } from './dto';

@ApiTags(Tags.doctor.name)
@ApiBearerAuth()
@Roles(Role.ADMIN)
@UseGuards(RolesGuard)
@UseGuards(JwtGuard)
@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @ApiOperation(DoctorOperation.create)
  @ApiCreatedResponse(DoctorResponse.create)
  @ApiBadRequestResponse(Exception.badRequest)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiUnprocessableEntityResponse(Exception.unprocessableEntity)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @UseFilters(PrismaClientKnownRequestError)
  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @ApiOperation(DoctorOperation.findAll)
  @ApiOkResponse(DoctorResponse.findAll)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  @ApiOperation(DoctorOperation.findOne)
  @ApiOkResponse(DoctorResponse.findOne)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiNotFoundResponse(Exception.notFound)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @Get(':id')
  findOne(@Param('id') doctorId: string) {
    return this.doctorService.findOne(doctorId);
  }

  @ApiOperation(DoctorOperation.update)
  @ApiOkResponse(DoctorResponse.update)
  @ApiBadRequestResponse(Exception.badRequest)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiNotFoundResponse(Exception.notFound)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @Patch(':id')
  update(
    @Param('id') doctorId: string,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ) {
    return this.doctorService.update(doctorId, updateDoctorDto);
  }

  @ApiOperation(DoctorOperation.remove)
  @ApiNoContentResponse(DoctorResponse.remove)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiNotFoundResponse(Exception.notFound)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') doctorId: string) {
    return this.doctorService.remove(doctorId);
  }
}
