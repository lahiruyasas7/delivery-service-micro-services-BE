import { NestFactory } from '@nestjs/core';
import { RidersServiceModule } from './riders-service.module';

async function bootstrap() {
  const app = await NestFactory.create(RidersServiceModule);
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
