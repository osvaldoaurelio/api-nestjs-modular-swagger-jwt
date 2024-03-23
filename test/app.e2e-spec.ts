import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/common/modules/prisma/prisma.service';
import * as pactum from 'pactum';
import { AuthDto } from 'src/auth/dto';
import { UpdateUserDto } from 'src/user/dto';
import { CreatePatientDto, UpdatePatientDto } from 'src/patient/dto';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.init();
    await app.listen(3334);

    pactum.request.setBaseUrl('http://localhost:3334/');

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'example@server.com',
      password: 'password',
    };

    describe('Signup', () => {
      it('should throw if email empty', () => {
        return pactum
          .spec()
          .post('auth/signup')
          .withBody({
            password: dto.password,
          })
          .expectStatus(400);
      });

      it('should throw if password empty', () => {
        return pactum
          .spec()
          .post('auth/signup')
          .withBody({
            email: dto.email,
          })
          .expectStatus(400);
      });

      it('should throw if no body provided', () => {
        return pactum.spec().post('auth/signup').expectStatus(400);
      });

      it('should signup', () => {
        return pactum
          .spec()
          .post('auth/signup')
          .withBody(dto)
          .expectStatus(201);
      });
    });

    describe('Signin', () => {
      it('should throw if email empty', () => {
        return pactum
          .spec()
          .post('auth/signin')
          .withBody({
            password: dto.password,
          })
          .expectStatus(400);
      });

      it('should throw if password empty', () => {
        return pactum
          .spec()
          .post('auth/signin')
          .withBody({
            email: dto.email,
          })
          .expectStatus(400);
      });

      it('should throw if no body provided', () => {
        return pactum.spec().post('auth/signin').expectStatus(400);
      });

      it('should signin', () => {
        const dto: AuthDto = {
          email: 'example@server.com',
          password: 'password',
        };

        return pactum
          .spec()
          .post('auth/signin')
          .withBody(dto)
          .expectStatus(200)
          .stores('userAt', 'access_token');
      });
    });
  });

  describe('User', () => {
    describe('Get me', () => {
      it('should get current user', () => {
        return pactum
          .spec()
          .get('users/me')
          .withBearerToken('$S{userAt}')
          .expectStatus(200);
      });
    });

    describe('Edit user', () => {
      const dto: UpdateUserDto = {
        email: 'example@server.com',
        firstName: 'firstName',
      };

      it('should edit user', () => {
        return pactum
          .spec()
          .patch('users')
          .withBearerToken('$S{userAt}')
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.email)
          .expectBodyContains(dto.firstName);
      });
    });
  });

  describe('Patient', () => {
    describe('Get empty patients', () => {
      it('should get empty patients', () => {
        return pactum
          .spec()
          .get('patients')
          .withBearerToken('$S{userAt}')
          .expectStatus(200)
          .expectBody([]);
      });
    });

    describe('Create patient', () => {
      const dto: CreatePatientDto = {
        title: 'first title',
        link: 'http://example.com',
      };

      it('should create patients', () => {
        return pactum
          .spec()
          .post('patients')
          .withBearerToken('$S{userAt}')
          .withBody(dto)
          .expectStatus(201)
          .stores('patientId', 'id');
      });
    });

    describe('Get patients', () => {
      it('should get patients', () => {
        return pactum
          .spec()
          .get('patients')
          .withBearerToken('$S{userAt}')
          .expectStatus(200)
          .expectJsonLength(1);
      });
    });

    describe('Get patient by id', () => {
      it('should get patient by id', () => {
        return pactum
          .spec()
          .get('patients/{id}')
          .withPathParams('id', '$S{patientId}')
          .withBearerToken('$S{userAt}')
          .expectStatus(200)
          .expectBodyContains('$S{patientId}');
      });
    });

    describe('Edit patient by id', () => {
      const dto: UpdatePatientDto = {
        title: 'updated patient title',
        description: 'this is a description',
      };

      it('should edit patient by id', () => {
        return pactum
          .spec()
          .patch('patients/{id}')
          .withPathParams('id', '$S{patientId}')
          .withBearerToken('$S{userAt}')
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains('$S{patientId}')
          .expectBodyContains(dto.title)
          .expectBodyContains(dto.description);
      });
    });

    describe('Delete patient by id', () => {
      it('should delete patient by id', () => {
        return pactum
          .spec()
          .delete('patients/{id}')
          .withPathParams('id', '$S{patientId}')
          .withBearerToken('$S{userAt}')
          .expectStatus(204);
      });

      it('should get empty patients', () => {
        return pactum
          .spec()
          .get('patients')
          .withBearerToken('$S{userAt}')
          .expectStatus(200)
          .expectJsonLength(0);
      });
    });
  });
});
