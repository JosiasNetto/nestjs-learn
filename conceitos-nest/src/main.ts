import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Cria um app Nest a partir de um appModule
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove propriedades não declaradas no DTO
    forbidNonWhitelisted: true, // Levanta erro se houver propriedades não declaradas no DTO
    transform: false // Tenta transformar os tipos de parametros e DTOs
  })); 
  await app.listen(process.env.PORT ?? 3000); // Escuta na porta 3000
}
bootstrap();
