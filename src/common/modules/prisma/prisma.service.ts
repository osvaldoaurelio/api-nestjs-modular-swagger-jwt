import {
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
  Scope,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable({ scope: Scope.DEFAULT })
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(readonly config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
      errorFormat: 'minimal',
      log: ['query', 'info', 'warn'],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  cleanDb() {
    return this.$transaction([
      this.address.deleteMany(),
      this.admin.deleteMany(),
      this.doctor.deleteMany(),
      this.patient.deleteMany(),
      this.user.deleteMany(),
      this.appointment.deleteMany(),
    ]);
  }
}
