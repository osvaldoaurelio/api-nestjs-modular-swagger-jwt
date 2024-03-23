import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './domain/admin/admin.module';
import { AppointmentModule } from './domain/appointment/appointment.module';
import { AuthModule } from './domain/auth/auth.module';
import { DoctorModule } from './domain/doctor/doctor.module';
import { PatientModule } from './domain/patient/patient.module';
import { UserModule } from './domain/user/user.module';
import { PrismaModule } from './common/modules/prisma/prisma.module';
import { SwaggerModule } from './common/modules/swagger/swagger.module';
import { CryptModule } from './common/modules/crypt/crypt.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    AdminModule,
    AppointmentModule,
    CryptModule,
    DoctorModule,
    PatientModule,
    PrismaModule,
    SwaggerModule,
    UserModule,
  ],
})
export class AppModule {}
