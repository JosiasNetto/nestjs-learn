import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Cria um app Nest a partir de um appModule
  await app.listen(process.env.PORT ?? 3000); // Escuta na porta 3000
}
bootstrap();
