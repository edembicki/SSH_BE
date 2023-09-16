import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('APP API')
    .setDescription('The APP API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1, docExpansion: 'none' },
  });

  await app.listen(3000);
}
bootstrap();
