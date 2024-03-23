import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreatePatientDto, PatientDto, UpdatePatientDto } from './dto';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';

@Injectable()
export class PatientService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPatientDto: CreatePatientDto) {
    const patient = await this.prismaService.patient.create({
      data: createPatientDto,
    });

    return plainToInstance(PatientDto, patient);
  }

  async findAll() {
    const patients = await this.prismaService.patient.findMany();

    return plainToInstance(PatientDto, patients);
  }

  async findOne(patientId: string) {
    const patientFound = await this.prismaService.patient.findFirst({
      where: { id: patientId },
    });

    if (!patientFound) throw new NotFoundException('Patient not found');

    return plainToInstance(PatientDto, patientFound);
  }

  async update(patientId: string, updatePatientDto: UpdatePatientDto) {
    const patientFound = await this.prismaService.patient.findUnique({
      where: { id: patientId },
    });

    if (!patientFound) throw new NotFoundException('Patient not found');

    const patient = await this.prismaService.patient.update({
      where: { id: patientId },
      data: updatePatientDto,
    });

    return plainToInstance(PatientDto, patient);
  }

  async remove(patientId: string) {
    const patientFound = await this.prismaService.patient.findUnique({
      where: { id: patientId },
    });

    if (!patientFound) throw new NotFoundException('Patient not found');

    return this.prismaService.patient.delete({
      where: { id: patientId },
    });
  }
}
