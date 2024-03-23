import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { AuthDto, CreateAuthDto } from './dto';
import { plainToInstance } from 'class-transformer';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly conig: ConfigService,
  ) {}

  private async asignToken(userId: string, email: string) {
    const access_token = await this.jwt.signAsync(
      {
        sub: userId,
        email,
      },
      {
        expiresIn: '3d',
        secret: this.conig.get('JWT_SECRET'),
      },
    );

    return { access_token };
  }

  async signupUser(createAuthDto: CreateAuthDto, role: Role, type: string) {
    const userCreated = await this.prisma.user.create({
      data: {
        email: createAuthDto.email,
        hash: await argon.hash(createAuthDto.password),
        role,
        [type]: { create: createAuthDto[type] },
      },
      include: { [type]: true },
    });

    return plainToInstance(AuthDto, userCreated);
  }

  async signin(authDto: AuthDto) {
    const userFound = await this.prisma.user.findUnique({
      where: { email: authDto.email },
    });

    if (!userFound) throw new ForbiddenException('Credentials incorrect');

    const pwMatches = await argon.verify(userFound.hash, authDto.password);

    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

    return this.asignToken(userFound.id, userFound.email);
  }
}
