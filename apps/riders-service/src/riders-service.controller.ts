import { Controller, Get } from '@nestjs/common';
import { RidersServiceService } from './riders-service.service';

@Controller()
export class RidersServiceController {
  constructor(private readonly ridersServiceService: RidersServiceService) {}

  @Get()
  getHello(): string {
    return this.ridersServiceService.getHello();
  }
}
