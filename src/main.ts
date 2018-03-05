import { NestFactory } from '@nestjs/core';
import * as logger from 'morgan';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(logger('dev'));
  await app.listen(3000);
}

bootstrap();
