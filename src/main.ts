import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swagger = new DocumentBuilder()
    .setTitle('My List of Series')
    .setDescription('Manage my list of series')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
void bootstrap();
