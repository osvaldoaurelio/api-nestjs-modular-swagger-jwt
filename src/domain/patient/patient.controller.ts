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
import { PatientOperation, PatientResponse } from './docs';
import { CreatePatientDto, UpdatePatientDto } from './dto';
import { PatientService } from './patient.service';

@ApiTags(Tags.patient.name)
@ApiBearerAuth()
@Roles(Role.ADMIN)
@UseGuards(RolesGuard)
@UseGuards(JwtGuard)
@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @ApiOperation(PatientOperation.create)
  @ApiCreatedResponse(PatientResponse.create)
  @ApiBadRequestResponse(Exception.badRequest)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiUnprocessableEntityResponse(Exception.unprocessableEntity)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @UseFilters(PrismaClientKnownRequestError)
  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @ApiOperation(PatientOperation.findAll)
  @ApiOkResponse(PatientResponse.findAll)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @ApiOperation(PatientOperation.findOne)
  @ApiOkResponse(PatientResponse.findOne)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiNotFoundResponse(Exception.notFound)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @Get(':id')
  findOne(@Param('id') patientId: string) {
    return this.patientService.findOne(patientId);
  }

  @ApiOperation(PatientOperation.update)
  @ApiOkResponse(PatientResponse.update)
  @ApiBadRequestResponse(Exception.badRequest)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiNotFoundResponse(Exception.notFound)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @Patch(':id')
  update(
    @Param('id') patientId: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    return this.patientService.update(patientId, updatePatientDto);
  }

  @ApiOperation(PatientOperation.remove)
  @ApiNoContentResponse(PatientResponse.remove)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiNotFoundResponse(Exception.notFound)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') patientId: string) {
    return this.patientService.remove(patientId);
  }
}
