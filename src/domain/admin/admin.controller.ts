import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Exception, Tags } from 'src/common/modules/swagger/shared/docs';
import { Roles } from '../auth/decorator';
import { JwtGuard, RolesGuard } from '../auth/guard';
import { AdminService } from './admin.service';
import { AdminOperation, AdminResponse } from './docs';
import { UpdateAdminDto } from './dto';

@ApiTags(Tags.admin.name)
@ApiBearerAuth()
@Roles(Role.ADMIN)
@UseGuards(RolesGuard)
@UseGuards(JwtGuard)
@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // @ApiOperation(AdminOperation.create)
  // @ApiCreatedResponse(AdminResponse.create)
  // @ApiBadRequestResponse(Exception.badRequest)
  // @ApiUnauthorizedResponse(Exception.unauthorized)
  // @ApiUnprocessableEntityResponse(Exception.unprocessableEntity)
  // @ApiInternalServerErrorResponse(Exception.internalServerError)
  // @UseFilters(PrismaClientKnownRequestError)
  // @Post()
  // create(@Body() createAdminDto: CreateAdminDto) {
  //   return this.adminService.create(createAdminDto);
  // }

  @ApiOperation(AdminOperation.findAll)
  @ApiOkResponse(AdminResponse.findAll)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation(AdminOperation.findOne)
  @ApiOkResponse(AdminResponse.findOne)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiNotFoundResponse(Exception.notFound)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @Get(':id')
  findOne(@Param('id') adminId: string) {
    return this.adminService.findOne(adminId);
  }

  @ApiOperation(AdminOperation.update)
  @ApiOkResponse(AdminResponse.update)
  @ApiBadRequestResponse(Exception.badRequest)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiNotFoundResponse(Exception.notFound)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @Patch(':id')
  update(@Param('id') adminId: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(adminId, updateAdminDto);
  }

  @ApiOperation(AdminOperation.remove)
  @ApiNoContentResponse(AdminResponse.remove)
  @ApiUnauthorizedResponse(Exception.unauthorized)
  @ApiNotFoundResponse(Exception.notFound)
  @ApiInternalServerErrorResponse(Exception.internalServerError)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') adminId: string) {
    return this.adminService.remove(adminId);
  }
}
