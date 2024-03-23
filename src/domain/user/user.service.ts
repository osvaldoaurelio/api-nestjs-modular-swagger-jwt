import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { CryptService } from 'src/common/modules/crypt/crypt.service';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import {
  CreateUserAdminDto,
  CreateUserDoctorDto,
  CreateUserPatientDto,
  UserAdminDto,
  UserDoctorDto,
  UserPatientDto,
} from './dto';

@Injectable()
export class UserService {
  constructor(
    private readonly crypt: CryptService,
    private readonly prisma: PrismaService,
  ) {}

  async createUserAdmin(createUserAdminDto: CreateUserAdminDto) {
    const userAdminCreated = await this.prisma.user.create({
      data: {
        email: createUserAdminDto.email,
        hash: await this.crypt.hash(createUserAdminDto.password),
        role: Role.ADMIN,
        admin: { create: createUserAdminDto.admin },
      },
      include: { admin: true },
    });

    return plainToInstance(UserAdminDto, userAdminCreated);
  }

  async createUserDoctor(createUserDoctorDto: CreateUserDoctorDto) {
    const userDoctorCreated = await this.prisma.user.create({
      data: {
        email: createUserDoctorDto.email,
        hash: await this.crypt.hash(createUserDoctorDto.password),
        role: Role.DOCTOR,
        doctor: { create: createUserDoctorDto.doctor },
      },
      include: { doctor: true },
    });

    return plainToInstance(UserDoctorDto, userDoctorCreated);
  }

  async createUserPatient(createUserPatientDto: CreateUserPatientDto) {
    const userPatientCreated = await this.prisma.user.create({
      data: {
        email: createUserPatientDto.email,
        hash: await this.crypt.hash(createUserPatientDto.password),
        role: Role.PATIENT,
        patient: { create: createUserPatientDto.patient },
      },
      include: { patient: true },
    });

    return plainToInstance(UserPatientDto, userPatientCreated);
  }
}
