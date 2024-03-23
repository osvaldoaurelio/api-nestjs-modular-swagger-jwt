import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CryptService } from 'src/common/modules/crypt/crypt.service';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { AdminDto, UpdateAdminDto } from './dto';
import { Role } from '@prisma/client';

@Injectable()
export class AdminService {
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

  // async create(createAdminDto: CreateAdminDto) {
  //   const admin = await this.prisma.$transaction(async (prisma) => {
  //     const userCreated = await prisma.user.create({
  //       data: {
  //         email: createAdminDto.user.email,
  //         hash: await argon.hash(createAdminDto.user.password),
  //         role: Role.ADMIN,
  //       },
  //     });

  //     return prisma.admin.create({
  //       data: {
  //         fullName: createAdminDto.fullName,
  //         registrationNumber: createAdminDto.registrationNumber,
  //         user: {
  //           connect: { id: userCreated.id },
  //         },
  //       },
  //       include: { user: true },
  //     });
  //   });

  //   return plainToInstance(AdminDto, admin);
  // }

  async findAll() {
    const admins = await this.prisma.admin.findMany();

    return plainToInstance(AdminDto, admins);
  }

  async findOne(adminId: string) {
    const adminFound = await this.prisma.admin.findFirst({
      where: { id: adminId },
    });

    if (!adminFound) throw new NotFoundException('Admin not found');

    return plainToInstance(AdminDto, adminFound);
  }

  async update(adminId: string, updateAdminDto: UpdateAdminDto) {
    const adminFound = await this.prisma.admin.findUnique({
      where: { id: adminId },
    });

    if (!adminFound) throw new NotFoundException('Admin not found');

    const admin = await this.prisma.admin.update({
      where: { id: adminId },
      data: updateAdminDto,
    });

    return plainToInstance(AdminDto, admin);
  }

  async remove(adminId: string) {
    const adminFound = await this.prisma.admin.findUnique({
      where: { id: adminId },
    });

    if (!adminFound) throw new NotFoundException('Admin not found');

    return this.prisma.admin.delete({
      where: { id: adminId },
    });
  }
}
