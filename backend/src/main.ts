import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Делаем папку доступной для статических файлов
  app.useStaticAssets(join(__dirname, '..', 'uploads'));

  await app.listen(3000); // Запускаем сервер на порту 3000
}
bootstrap();