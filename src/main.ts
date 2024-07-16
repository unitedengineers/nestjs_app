import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './modules/app/app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

const injectSwagger = (app) => {
  const config = new DocumentBuilder()
    .setTitle('Apis')
    .setDescription('Follow all apis here')
    .setVersion('1.0')
    .addTag('')
    .addBearerAuth({
      description: `[just text field] Please enter token in following format: Bearer <JWT>`,
      name: 'authorization',
      bearerFormat: 'Bearer',
      scheme: 'Bearer',
      type: 'http',
      in: 'Header',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};

const injectMiddlewares = (app) => {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  injectMiddlewares(app);
  injectSwagger(app);

  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
