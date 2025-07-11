import { NestFactory } from '@nestjs/core';
import { RidersServiceModule } from './riders-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  //const app = await NestFactory.create(RidersServiceModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RidersServiceModule,
    { transport: Transport.TCP },
  );
  //await app.listen(process.env.port ?? 3002);
  await app.listen();
}
bootstrap();
