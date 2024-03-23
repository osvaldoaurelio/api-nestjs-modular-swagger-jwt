import { INestApplication, Injectable } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { customCss } from './assets';
import { Documents, Tags } from './shared/docs';

@Injectable()
export class SwaggerService {
  static setup(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle(Documents.config.title)
      .setDescription(Documents.config.description)
      .setVersion(Documents.config.version)
      .addTag(Tags.admin.name, Tags.admin.description)
      .addTag(Tags.appointment.name, Tags.appointment.description)
      .addTag(Tags.auth.name, Tags.auth.description)
      .addTag(Tags.doctor.name, Tags.doctor.description)
      .addTag(Tags.patient.name, Tags.patient.description)
      .addTag(Tags.user.name, Tags.user.description)
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);

    const options: SwaggerCustomOptions = {
      customSiteTitle: Documents.options.siteTitle,
      customCss,
      customfavIcon: './assets/favicon.ico',
    };

    SwaggerModule.setup(Documents.path, app, document, options);
  }
}
