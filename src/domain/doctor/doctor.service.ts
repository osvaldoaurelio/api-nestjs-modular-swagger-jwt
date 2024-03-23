import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { CreateDoctorDto, DoctorDto, UpdateDoctorDto } from './dto';

@Injectable()
export class DoctorService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDoctorDto: CreateDoctorDto) {
    const doctor = await this.prismaService.doctor.create({
      data: createDoctorDto,
    });

    return plainToInstance(DoctorDto, doctor);
  }

  async findAll() {
    const doctors = await this.prismaService.doctor.findMany();

    return plainToInstance(DoctorDto, doctors);
  }

  async findOne(doctorId: string) {
    const doctorFound = await this.prismaService.doctor.findFirst({
      where: { id: doctorId },
    });

    if (!doctorFound) throw new NotFoundException('Doctor not found');

    return plainToInstance(DoctorDto, doctorFound);
  }

  async update(doctorId: string, updateDoctorDto: UpdateDoctorDto) {
    const doctorFound = await this.prismaService.doctor.findUnique({
      where: { id: doctorId },
    });

    if (!doctorFound) throw new NotFoundException('Doctor not found');

    const doctor = await this.prismaService.doctor.update({
      where: { id: doctorId },
      data: updateDoctorDto,
    });

    return plainToInstance(DoctorDto, doctor);
  }

  async remove(doctorId: string) {
    const doctorFound = await this.prismaService.doctor.findUnique({
      where: { id: doctorId },
    });

    if (!doctorFound) throw new NotFoundException('Doctor not found');

    return this.prismaService.doctor.delete({
      where: { id: doctorId },
    });
  }
}
