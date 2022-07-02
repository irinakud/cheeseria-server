import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cheeseria')
    .setDescription('The cheeseria API description')
    .setVersion('1.0')
    .addTag('cheeseria')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //TODO: configure CORS to restrict access
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
