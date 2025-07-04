import { Module } from '@nestjs/common';
import { RidersServiceController } from './riders-service.controller';
import { RidersServiceService } from './riders-service.service';

@Module({
  imports: [],
  controllers: [RidersServiceController],
  providers: [RidersServiceService],
})
export class RidersServiceModule {}
